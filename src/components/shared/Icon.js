import React, { Component } from 'react';

export default class Icon extends Component {
	static defaultProps = {
		size: 16,
	};

	renderGraphic() {
		switch (this.props.icon) {
			case 'image':
				return (
					<g>
						<path d="M21 19v-14c0-1.1-.9-2-2-2h-14c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zm-12.5-5.5l2.5 3.01 3.5-4.51 4.5 6h-14l3.5-4.5z"></path>
					</g>
				);
			case 'my-icon':
				return (
					<g>
						<path d="M7.41 7.84l4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z" />
					</g>
				);
			case 'another-icon':
				return (
					<g>
						<path d="M7.41 15.41l4.59-4.58 4.59 4.58 1.41-1.41-6-6-6 6z" />
					</g>
				);
			case 'format-bold':
				return (
					<g>
						<path
							d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4h-6.25v14h7.04c2.09
          0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zm-5.6-4.29h3c.83 0 1.5.67 1.5 1.5s-.67
          1.5-1.5 1.5h-3v-3zm3.5 9h-3.5v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"
						></path>
					</g>
				);
			case 'format-italic':
				return (
					<g>
						<path d="M10 4v3h2.21l-3.42 8h-2.79v3h8v-3h-2.21l3.42-8h2.79v-3z"></path>
					</g>
				);
			case 'format-underline':
				return (
					<g>
						<path
							d="M12 17c3.31 0 6-2.69 6-6v-8h-2.5v8c0 1.93-1.57 3.5-3.5
          3.5s-3.5-1.57-3.5-3.5v-8h-2.5v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2h-14z"
						></path>
					</g>
				);
			case 'format-align-left':
				return (
					<g>
						<path
							d="M15 15h-12v2h12v-2zm0-8h-12v2h12v-2zm-12
          6h18v-2h-18v2zm0 8h18v-2h-18v2zm0-18v2h18v-2h-18z"
						></path>
					</g>
				);
			case 'format-align-center':
				return (
					<g>
						<path d="M7 15v2h10v-2h-10zm-4 6h18v-2h-18v2zm0-8h18v-2h-18v2zm4-6v2h10v-2h-10zm-4-4v2h18v-2h-18z"></path>
					</g>
				);
			case 'format-align-right':
				return (
					<g>
						<path d="M3 21h18v-2h-18v2zm6-4h12v-2h-12v2zm-6-4h18v-2h-18v2zm6-4h12v-2h-12v2zm-6-6v2h18v-2h-18z"></path>
					</g>
				);
			case 'add-box':
				return (
					<g>
						<path
							d="M19 3h-14c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2zm-2
          10h-4v4h-2v-4h-4v-2h4v-4h2v4h4v2z"
						></path>
					</g>
				);
			case 'add':
				return (
					<g>
						<path d="M19 13h-6v6h-2v-6h-6v-2h6v-6h2v6h6v2z"></path>
					</g>
				);
			case 'text-format':
				return (
					<g>
						<path
							d="M5 17v2h14v-2h-14zm4.5-4.2h5l.9 2.2h2.1l-4.75-11h-1.5l-4.75
          11h2.1l.9-2.2zm2.5-6.82l1.87 5.02h-3.74l1.87-5.02z"
						></path>
					</g>
				);
			case 'text':
				return (
					<g>
						<path
							d="M5 17v2h14v-2h-14zm4.5-4.2h5l.9 2.2h2.1l-4.75-11h-1.5l-4.75
           11h2.1l.9-2.2zm2.5-6.82l1.87 5.02h-3.74l1.87-5.02z"
						></path>
					</g>
				);
			case 'rect':
				return <rect width={14} height={14} x={4} y={5} rx={3} ry={3} />;
			case 'ellipse':
				return <circle r={8} cx={11} cy={12} />;
			case 'polygon':
				return (
					<g transform={'scale(0.034) translate(100 25)'}>
						<path
							d="M477.043,219.205L378.575,48.677c-7.974-13.802-22.683-22.292-38.607-22.292H143.041c-15.923,
                    0-30.628,8.49-38.608,22.292 L5.971,219.205c-7.961,13.801-7.961,30.785,0,44.588l98.462,
                    170.543c7.98,13.802,22.685,22.293,38.608,22.293h196.926 c15.925,0,30.634-8.491,
                    38.607-22.293l98.469-170.543C485.003,249.99,485.003,233.006,477.043,219.205z"
						/>
					</g>
				);
			case 'rotate':
				return (
					<g>
						<path
							d="M18.4 10.6c-1.85-1.61-4.25-2.6-6.9-2.6-4.65 0-8.58 3.03-9.96
           7.22l2.36.78c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88l-3.62
           3.62h9v-9l-3.6 3.6z"
						></path>
					</g>
				);
			case 'send-to-back':
				return (
					<g>
						<rect
							x={7}
							y={7}
							width={13}
							height={13}
							fill="#ababab"
							strokeWidth={1}
							stroke="black"
						/>
						<rect
							x={1}
							y={1}
							width={13}
							height={13}
							fill="white"
							stroke="black"
							strokeWidth={1}
						/>
					</g>
				);
			case 'bring-to-front':
				return (
					<g>
						<rect
							x={7}
							y={7}
							width={13}
							height={13}
							fill="white"
							strokeWidth={1}
							stroke="black"
						/>
						<rect
							x={1}
							y={1}
							width={13}
							height={13}
							fill="#ababab"
							stroke="black"
							strokeWidth={1}
						/>
					</g>
				);
			case 'map':
				return (
					<g>
						<path d="M0 0h24v24H0V0z" fill="none" />
						<path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM10 5.47l4 1.4v11.66l-4-1.4V5.47zm-5 .99l3-1.01v11.7l-3 1.16V6.46zm14 11.08l-3 1.01V6.86l3-1.16v11.84z" />
					</g>
				);
			case 'track':
				return (
					<g>
						<path d="M0 0h24v24H0V0z" fill="none" />
						<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" />
						<circle cx="12" cy="9" r="2.5" />
					</g>
				);
			case 'back':
				return (
					<path
						xmlns="http://www.w3.org/2000/svg"
						d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
					/>
				);
			case 'wifi':
			case 'gateway':
				return (
					<path d="m1 9 2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8 3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4 2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
				);
			default:
				return <g />;
		}
	}

	render() {
		let styles = {
			fill: this.props.active ? 'black' : '#b5b5b5',
			verticalAlign: 'middle',
			width: this.props.size,
			height: this.props.size,
		};
		return (
			<svg
				// fit={true}
				viewBox="0 0 24 24"
				preserveAspectRatio="xMidYMid meet"
				style={{ ...styles, ...this.props.style }}
				onClick={this.props.onClick}
			>
				{this.renderGraphic()}
			</svg>
		);
	}
}
