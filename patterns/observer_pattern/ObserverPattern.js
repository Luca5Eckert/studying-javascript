class Observable {
    constructor() {
        this.observers = [];
    }

    subscribe(func) {
        this.observers.push(func);
    }

    unsubscribe(func) {
        this.observers = this.observers.filter(observer => observer != func);
    }

    notify(data){
        this.observers.forEach(observer => observer(data));
    }

}

const youtubeChannel = new Observable();

youtubeChannel.subscribe((msg) => console.log(`Usuário 1 recebeu: ${msg}`));
youtubeChannel.subscribe((msg) => console.log(`Usuário 2 recebeu: ${msg}`));

youtubeChannel.notify("Novo vídeo postado!");