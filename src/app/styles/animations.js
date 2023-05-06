export const slideX = (direction, duration = 0.4, type = 'tween') => ({
	hidden: {
		opacity: 0,
		x: direction === 'right' ? -40 : 40,
	},
	show: {
		opacity: 1,
		x: 0,
		transition: {
			type: type,
			duration: duration,
		},
	},
});

export const slideY = (direction, duration = 0.4, type = 'tween') => ({
	hidden: {
		opacity: 0,
		y: direction === 'up' ? 40 : -40,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			type: type,
			duration: duration,
		},
	},
});

export const fadeIn = (duration = 0.4, type = 'tween') => ({
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			type: type,
			duration: duration,
		},
	},
});
