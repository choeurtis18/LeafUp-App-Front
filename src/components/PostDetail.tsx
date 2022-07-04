import { TrickAndTipsData } from "../interfaces"

interface PostDetaiProps {
    onePost : TrickAndTipsData | null ;
}

const PostDetail: React.FC<PostDetaiProps> = ({onePost}) => {
    return(
        <div className="post">
            <h1> Publication numéro : {onePost?.id} </h1>
            <h2> Titre : {onePost?.title}</h2>
            <p>{onePost?.body}</p>
        </div>
    )
}

export default PostDetail