import {createContext, useContext, useEffect, useState} from "react";

export const ConnectionContext = createContext();

export function ConnectionProvider({children}) {
    const [isConnected, setIsConnected] = useState(true);

    useEffect(() => {
        let socket;
        let reconnectTimeout;

        const connect = () => {
            // socket = new WebSocket("ws://localhost:3000");
            //
            // socket.onopen = () => setIsConnected(true);
            // socket.onclose = () => {
            //     setIsConnected(false);
            //     reconnectTimeout = setTimeout(connect, 3000);
            // };
            // socket.onerror = () => {
            //     setIsConnected(false);
            //     socket.close();
            // };
        };

        connect();

        return () => {
            if (socket) socket.close();
            if (reconnectTimeout) clearTimeout(reconnectTimeout);
        };
    }, []);

    return (
        <ConnectionContext.Provider value={{isConnected}}>
            {children}
        </ConnectionContext.Provider>
    );
}

export function useConnection() {
    return useContext(ConnectionContext);
}