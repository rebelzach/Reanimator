
window.reanimatorTesting = {
    disconnect: async function () {
        Blazor.disconnect();
        await new Promise(resolve => setTimeout(resolve, 1000));
        //Blazor._internal.forceCloseConnection();
    }
};