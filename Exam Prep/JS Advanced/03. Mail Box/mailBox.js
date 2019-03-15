class MailBox {

    constructor() {
        this.messages = [];

    }

    addMessage(subject, text) {

        this.messages.push({
            subject,
            text
        });
        return this;
    }

    get messageCount() {
        return this.messages.length;
    }

    deleteAllMessages() {

        this.messages = [];
    }

    findBySubject(substr) {

       return this.messages.filter(m=>m.subject.includes(substr))
    }

    toString() {

        if (this.messages.length>0) {

            let result=[];

            for(let msg of this.messages){

                result.push(`* [${msg.subject}] ${msg.text}`);
            }

            return result.join('\n');
            
        }else{
            return `* (empty mailbox)`
        }

    }

}
