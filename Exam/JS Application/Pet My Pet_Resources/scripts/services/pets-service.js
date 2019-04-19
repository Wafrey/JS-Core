const petsService = (() => {
    function getAll(filter) {
        let query = filter && filter != 'All'
            ? {category: filter} 
            : {};
        
        query = Object.assign(query, {"_acl.creator": {"$ne": sessionStorage.getItem('id')}});
        
        let endpoint = `pets?query=${JSON.stringify(query)}&sort={"likes": -1}`;
        
        return kinvey.get('appdata', endpoint, 'kinvey');
    }

    function getById(petId) {
        return kinvey.get('appdata', `pets?query=${JSON.stringify({_id: petId})}`, kinvey);
    }

    function likeOtherPet(petId, pet) {
        return kinvey.update('appdata', `pets/${petId}`, 'kinvey', {...pet, likes: Number(pet.likes) + 1});
    }

    function updateMyPet(petId, pet, description) {
        return kinvey.update('appdata', `pets/${petId}`, 'kinvey', {...pet, description});
    }

    function deleteMyPet(petId) {
        return kinvey.remove('appdata', `pets/${petId}`, 'kinvey');
    }

    function create(data) {
        return kinvey.post('appdata', 'pets', 'kinvey', data);
    }

    function getMyPets(userId) {
        return kinvey.get('appdata', `pets?query={"_acl.creator":"${userId}"}`);
    }

    return {
        getMyPets,
        getAll,
        create,
        getById,
        likeOtherPet,
        updateMyPet,
        deleteMyPet
    };
})();