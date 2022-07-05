import React, { useState, useEffect } from 'react';
import { TrickAndTipsData } from '../interfaces';
import '../Styles/style.css'
import Cards from './components/Cards';
import ContainerCards from './components/ContainerCards';
import ContainerCardsBis from './components/ContainerCardsBis';
import Filtres from './components/Filtres';

var post_list = [
  {
      "userId": 1,
      "id": 1,
      "title": "sunt auri optio reprehenderit",
      "body": "quia et suscipit\nsuscip untur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      "niveau": "Debutant",
      "date": "2021-03-18",
      "note": "40",
  },
  {
      "userId": 1,
      "id": 2,
      "title": "qui esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      "niveau": "Intermediaires",
      "date": "2012-08-14",
      "note": "17",
  },
  {
      "userId": 1,
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
      "niveau": "Intermediaires",
      "date": "2012-08-14",
      "note": "32",
  },
  {
      "userId": 1,
      "id": 4,
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
      "niveau": "Debutant",
      "date": "2012-08-29",
      "note": "24",
  },
  {
      "userId": 1,
      "id": 5,
      "title": "nesciunt quas odio",
      "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
      "niveau": "Experts",
      "date": "2020-12-14",
      "note": "23",
  },
  {
      "userId": 1,
      "id": 6,
      "title": "dolorem eum magni eos aperiam quia",
      "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
      "niveau": "Intermediaires",
      "date": "2012-08-01",
      "note": "7",
  },
  {
      "userId": 1,
      "id": 7,
      "title": "magnam facilis autem",
      "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
      "niveau": "Experts",
      "date": "2021-06-05",
      "note": "27",
  },
  {
      "userId": 1,
      "id": 8,
      "title": "dolorem dolore est ipsam",
      "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
      "niveau": "Intermediaires",
      "date": "2014-04-05",
      "note": "18",
  },
  {
      "userId": 1,
      "id": 9,
      "title": "nesciunt iure omnis dolorem tempora et accusantium",
      "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
      "niveau": "Debutant",
      "date": "2012-08-14",
      "note": "4",
  },
  {
      "userId": 1,
      "id": 10,
      "title": "optio molestias id quia eum",
      "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
      "niveau": "Debutants",
      "date": "2010-12-11",
      "note": "12"
  }
]

const TrickAndTipsPage: React.FC = () => {
    const [allPosts,setAllPosts] = useState<TrickAndTipsData[] | null >(null);

    useEffect(() => {
        const getPosts = async()=>{
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`);
            const data: TrickAndTipsData[] = await response.json()
            setAllPosts(data);
        }
        getPosts();
    }, []);
  return (
    <div className='post-container'>
      <div className='circleUp'></div>
      <div className='header'>
        <h1>Tricks & Trips</h1>
        <p>Fait par la communauté</p>
      </div>
      <Filtres setAllPosts={setAllPosts} allPosts={post_list} />
      <ContainerCards allPosts={post_list} />
      {/* 
        <ContainerCardsBis 
         post_title = "Comment prendre soin de ses plantes ?"
         post_content = "Dans ce Post vous trouverez tous les conseils nécessaires pour vous aider à garder vos plantes en vie. "
         post_author = "J. Lawrence"
         post_niveau='Debutants'
         post_date="12/11/2010"
         post_note="23"
         post_url = "tricksandtips/11"
        />
        <ContainerCardsBis 
         post_title = "Comment prendre soin de ses plantes ?"
         post_content = "Dans ce Post vous trouverez tous les conseils nécessaires pour vous aider à garder vos plantes en vie. "
         post_author = "J. Lawrence"
         post_niveau='Experts'
         post_date="21/09/2021"
         post_note="12"
         post_url = "tricksandtips/11"
        /> 
      */}
      <div className='circleDown'></div>
    </div>
  )

}   

export default TrickAndTipsPage