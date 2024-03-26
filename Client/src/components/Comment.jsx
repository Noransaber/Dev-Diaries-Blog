/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import moment from 'moment';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Comment({ comment }) {
  const [user, setUser] = useState({});
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`/api/user/${comment.userId}`);
        const data = res.json();
        if (res.ok) {
          setUser(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getUser();
  }, [comment]);
  return <div></div>;
}
