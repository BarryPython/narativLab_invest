import { useDisconnect } from 'wagmi'

export default function LogoutButton() {
    const { disconnect } = useDisconnect()

  return (
    <button className="secondary-btn" style={{width : '100%', justifyContent : "center"}} onClick={() => disconnect()} >Logout</button>
  );
}