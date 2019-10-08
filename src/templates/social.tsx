import React from 'react';
import { Parallax } from 'react-spring/renderprops-addons.cjs';
import Layout from '../components/layout';
import Projects from '../components/projects';

const Social = () => {
	<Layout>
		<Parallax pages={1}>
			<Projects offset={0} />
		</Parallax>
	</Layout>;
};

export default Social;
