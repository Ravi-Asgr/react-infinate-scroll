import { Participant } from './components/participant';
import { useState, useEffect } from 'react';
import { Spinner } from './components/spinner';

function App() {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      console.log('Current API call ...... ')
      const response = await fetch(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`);
      const data = await response.json();
      setItems(prevItems => [...prevItems, ...data.data]);
      setPage(prevPage => prevPage + 1);
    } catch (error) {
      console.log(JSON.stringify(error))
      setError('Error calling API');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
      return;
    }

    fetchData();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  const toggleActivation = (item, i) => {
    item.name = 'Some user 123';
    var data = [...items];
    data.forEach(a => {
      if (a["_id"] === item["_id"]) {
        data[i] = item;
      }
    })
    setItems([...data]);
  }

  return (
    <main>
      <article className='container article'>
        <section className='tasks'>

          {items.length > 0 && (
            <ul className='tasks-list'>
              {
                items.map(item => (
                  <Participant item={item} toggle={toggleActivation} />
                ))
              }
            </ul>
          )}
          {isLoading && <Spinner />}
          {error && <div>{error}</div>}
        </section>
      </article>
    </main>
  );
}

export default App;
