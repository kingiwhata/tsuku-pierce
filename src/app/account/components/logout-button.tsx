'use client';

export default function Button({ handleClick }) {
    return <button onClick={(e) => handleClick({})}>Log Out</button>;
}
