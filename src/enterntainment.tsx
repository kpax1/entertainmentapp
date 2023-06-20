import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Root from './Root';
import Movie from './Movie';
import SingleMovie from './SingleMovie';
import TVseries from './TVseries';
import { EntertainmentProvider } from './EntertainmentContext';
import Bookmarked from './Bookmarked';


export default function Enterntainment() {

    
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Root />}>
             <Route path='/movie' element={<Movie/>}/>
             <Route path='/movie/:id' element={<SingleMovie />}/>
             <Route path='/tvseries' element={<TVseries />}/>
             <Route path='tvseries/:id' element={<SingleMovie />}/>
             <Route path='/bookmarked' element={<Bookmarked />}/>

            </Route>
        )
    );


return   <EntertainmentProvider>
  <RouterProvider router ={router}/>
  </EntertainmentProvider>
  
  
}
