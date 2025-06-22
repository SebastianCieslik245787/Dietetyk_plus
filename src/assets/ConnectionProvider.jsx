// context/ConnectionContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

export const ConnectionContext = createContext();

export function ConnectionProvider({ children }) {
    const [isConnected, setIsConnected] = useState(true);

    useEffect(() => {
        const socket = new WebSocket("ws://localhost:3000");

        socket.onopen = () => setIsConnected(true);
        socket.onclose = () => setIsConnected(false);
        socket.onerror = () => setIsConnected(false);

        return () => socket.close();
    }, []);

    return (
        <ConnectionContext.Provider value={{ isConnected }}>
            {children}
        </ConnectionContext.Provider>
    );
}

export function useConnection() {
    return useContext(ConnectionContext);
}
