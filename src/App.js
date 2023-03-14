// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header';
import NewsList from './Components/NewsList/NewsList';
import NewsSummary from './Components/NewsSummary/NewsSummary';

import { getNewsDataAsync } from './utils/newsDataService';

function App() {

  const [news, setNews] = useState([]);
  const [error, setError] = useState({});

  const getNewsData = async () => {

    const news = await getNewsDataAsync();

    if (news?.error) {
      setError(news);
      setNews([]);
    }
    if (!news?.error) {
      setNews(news);
      setError({});
    }
  }

  useEffect(() => {

    getNewsData();
  }, []);

  return (
    <Router>
      <Header />
      {error && Object.keys(error).length > 0 && <h2>No News to display</h2>}
      <Routes>
        <Route path='/' element={
          (!error || Object.keys(error).length === 0) &&
          <div className='container fluid'>
            <div className='row'>
              <NewsList news={news} />
            </div>
          </div>
        } />
        <Route path='/summary/:id' element={
          (!error || Object.keys(error).length === 0) &&
          <div className='container fluid'>
            <div className='row'>
              <NewsSummary news={news} />
            </div>
          </div>
        } />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
