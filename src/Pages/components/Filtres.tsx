

export function Filtres({allPosts, setAllPosts}:any){
    const d = new Date();

    const updateList = (type:any) => {
        console.log(allPosts);
        console.log(type);
        console.log('----');
        //console.log(allPosts.filter(post => new Date(post.date) - new Date() > 0));
    }
    return (
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            <div className="wrap">
            <button onClick={() => updateList("Date")} className="buttonTrickAndTips">Date</button>
            <button onClick={() => updateList("Note")} className="buttonTrickAndTips">Note</button>
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