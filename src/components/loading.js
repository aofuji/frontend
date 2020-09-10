import React from 'react';


export default function Loading({ isLoading }) {
  if (!isLoading) return <></>;

  return (
      <div>
        <span>Carregando...</span>
      </div>
  );
}