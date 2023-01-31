import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Home.css";

import CatCard from "../CatCard/CatCard"

import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react';

function Home() {
  const cats = useSelector(state => state.cats).value
  const query = useSelector (state => state.query).value

  const [displayedCats, setDisplayedCats] = useState(cats)

  useEffect(() => {
    setDisplayedCats(cats);
    if(query !== ""){
      const newArr= []
      for (let i = 0; i < cats.length; i++) {
        const cat = cats[i];
        if (query && 
          (
            cat.name.toLowerCase().includes(query)
            || cat.origin.toLowerCase().includes(query)
            || cat.length.toLowerCase().includes(query)
          )
          ){
            newArr.push(cat)
          }
        else if (!query) {
          newArr.push(cat)
        }
      } 
      setDisplayedCats(newArr)
    }
  }, [cats, query]);
  
  return (
      <div>
         <div id="background"> </div>
        <Container>
          <h2>Nuestas Mascotas</h2>
          <Row>
            {displayedCats.map((cat) => (
              <Col xs>
                <CatCard {...cat}/>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      
  );
}

export default Home;
