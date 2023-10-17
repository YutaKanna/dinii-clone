import { useEffect, useState } from 'react';

export default function Home() {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch('/api/menus')
      .then((response) => response.json())
      .then((data) => setMenus(data));
      
  }, []);

  return (
    <div>
      <h1>Menus</h1>
      <ul>
        {menus.map((menu) => (
          <li key={menu._id}>
            <h2>{menu.name}</h2>
            <p>Price: ${menu.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}