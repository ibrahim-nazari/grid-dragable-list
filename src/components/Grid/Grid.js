import React from 'react';
import {
  rectSortingStrategy,
} from '@dnd-kit/sortable';

import {Sortable} from './Sortable';
import {GridContainer} from './GridContainer';

export default {
  title: 'Presets/Sortable/Grid',
};

const props= {
  adjustScale: true,
  Container: (props) => <GridContainer {...props} columns={5} />,
  strategy: rectSortingStrategy,
  wrapperStyle: () => ({
    width: 200,
    height: 140,
  }),
};
export const BasicSetup = () => <Sortable {...props} />;






export const ScrollContainer = () => (
  <div
    style={{
      height: '50vh',
      margin: '0 auto',
      overflow: 'auto',
    }}
  >
    <Sortable {...props} />
  </div>
);



