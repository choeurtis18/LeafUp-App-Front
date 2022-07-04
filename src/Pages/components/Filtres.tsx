

export function Filtres(){
    return (
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            <div className="wrap">
            <button className="buttonTrickAndTips">Date</button>
            <button className="buttonTrickAndTips">Note</button>
            <div className="dropdown">
                <button className="buttonTrickAndTips">Niveau</button>
                <div className="dropdown-content">
                    <a href="#">Pour Débutants</a>
                    <a href="#">Pour Intérmédiaires</a>
                    <a href="#">Pour Experts</a>
                </div>
            </div>

            </div>
            
                        
        </div>
    )
}

export default Filtres