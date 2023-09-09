import React, { useState, useEffect, useCallback } from 'react';

function InfiniteScroll({ data, renderItem }) {

  const [list, setList] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setList(data.slice(0, 10));
    setPage(1);
    setLoading(false);
  }, [data]);

  useEffect(() => {

    const scrollHandler = () => {

      const contactsBlock = document.querySelector('[class^="ContactLayout_contacts_wrapper"]');
      const scrollPosition = window.innerHeight + window.pageYOffset;

      const firstProject = document.querySelector('[class^="RenderProjectCoverLayout_cover_project_wrapper"]');

      if (firstProject && scrollPosition < contactsBlock.offsetTop - firstProject.offsetHeight * 1.5) return;

      setLoading(true);
    };

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);
  
  const renderProjects = useCallback(() => {

    if (!loading) return;

    if (page * 10 >= data.length) return setLoading(false);

    setList(list.concat(data.slice(page * 10, page * 10 + 10)));

    setPage(page + 1);
    setLoading(false);
  }, [loading, page, data, list]);

  useEffect(() => {
    renderProjects();
  }, [renderProjects]);

  return (
    <>
      {list.map(renderItem)}
      {loading && data.length > list.length && <p>Loading...</p>}
    </>
  );
}

export default InfiniteScroll;