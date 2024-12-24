import NavBar from './components/nav-bar'
import CardComponent, { cardprops } from './components/card-component'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { useToast } from './hooks/use-toast';

const App = () => {
  const URL  = 'https://dummyapi.online/api/movies';
  const [data,setData] = useState<cardprops[]>([]);
  const {toast} = useToast();
  useEffect(()=>{
    axios.get(URL).then((res)=>{
      setData(res.data);
    }).catch((err)=>{
      if(err){
        toast({
          description: 'Error while fetching data',
          variant:'destructive'
        });
      }
    });
  },[]);
  return (
    <div>
      <NavBar></NavBar>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 place-items-center gap-5 mt-10 mx-6'>
        {
          data.map((item,index)=>{
            return <CardComponent key={index} id={item.id} image={item.image} movie={item.movie} rating={item.rating} imdb_url={item.imdb_url}></CardComponent>
          })
        }
      </div>
    </div>
  )
}

export default App