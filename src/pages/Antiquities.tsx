import React from 'react';
import type { Antiquity } from '../@typings/faunaTypes';

interface AntiquitiesProps {
  antiquities: Antiquity[];
}

export function Antiquities({ antiquities }: AntiquitiesProps) {
  return (
    <div>
      <h2>Antiquities in Alik'r Desert</h2>
      {antiquities.map((antiquity) => (
        <p key={antiquity.item}>{antiquity.item}</p>
      ))}
    </div>
  );
}
