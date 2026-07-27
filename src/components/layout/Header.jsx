import "./Header.css"
export function Header({isSidebarShow, onToggle}) {
  return (
  <header>
    <div className="menu" onClick={()=>{onToggle(!isSidebarShow)}}>CARService</div>
    <div className="personal">
    <div className="person">Hello, Josh!</div>
    <div className="login">Log out</div>
    </div>
  </header>
  )
}
