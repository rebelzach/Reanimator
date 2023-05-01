
window.reanimator = {
    reconnectionHandler: {
        async onConnectionDown(options, error) {
            console.log("down");
            await new Promise(resolve => setTimeout(resolve, 1000));
            const result = Blazor.reconnect();
            if (!result) {
                console.log("died");
                const blazorScript = document.querySelector('script[src="_framework/blazor.server.js"]');
                if (blazorScript) {
                    blazorScript.remove();
                    const newScript = document.createElement('script');
                    newScript.src = '_framework/blazor.server.js';
                    document.body.appendChild(newScript);
                }
            }
        },
        onConnectionUp() {

        }
    }
};
