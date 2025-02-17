import React from 'react'

export const NotFoundPage: React.FC = () => {
  return (
    <div>
      <h1>Not Found</h1>
      <p className='lead'>The page you are looking for does not exist.</p>
    </div>
  )
}

// export const NotFoundPage: React.FC = () => {
// 	const styles = {
// 		container: {
// 			textAlign: 'center',
// 			padding: '50px',
// 			backgroundColor: '#f8f9fa',
// 			borderRadius: '8px',
// 			boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
// 			width: '80%',
// 			maxWidth: '500px',
// 			margin: 'auto',
// 		},
// 		h1: {
// 			fontSize: '48px',
// 			color: '#dc3545',
// 			marginBottom: '20px',
// 		},
// 		lead: {
// 			fontSize: '18px',
// 			color: '#6c757d',
// 		},
// 	};

// 	return (
// 		<div style={styles.container}>
// 			<h1 style={styles.h1}>Not Found</h1>
// 			<p style={styles.lead}>The page you are looking for does not exist.</p>
// 		</div>
// 	);
// };
