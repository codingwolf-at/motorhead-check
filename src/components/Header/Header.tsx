import React from 'react';

type HeaderProps = {
  userName: string;
  userScore: number;
}

export function Header({userName, userScore}: HeaderProps) {
  return (
    <div>
      <h1>This is header</h1>
      <h2>Hello {userName}!</h2>
      <h2>Your Score: {userScore}</h2>
    </div>
  )
}
