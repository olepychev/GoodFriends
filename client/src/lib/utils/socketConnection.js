const SOCKET_SERVER = import.meta.env.VITE_SOCKET_SERVER;
import { io, Socket } from 'socket.io-client';
export const socket = io(SOCKET_SERVER);
