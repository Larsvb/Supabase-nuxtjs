<template>
	<div class="blur-overlay">
		<div class="blur-overlay__wrapper">
			<div
				style="
					position: relative;
					width: 100%;
					height: 100%;
					border-radius: 12px;
				"
			>
				<div
					style="
						position: absolute;
						inset: 0;
						z-index: 1;
						backdrop-filter: blur(0.5px);
						-webkit-backdrop-filter: blur(0.5px);
						mask-image: linear-gradient(
							to bottom,
							rgba(0, 0, 0, 0) 0%,
							rgba(0, 0, 0, 1) 12.5%,
							rgba(0, 0, 0, 1) 25%,
							rgba(0, 0, 0, 0) 37.5%
						);
						-webkit-mask-image: linear-gradient(
							to bottom,
							rgba(0, 0, 0, 0) 0%,
							rgba(0, 0, 0, 1) 12.5%,
							rgba(0, 0, 0, 1) 25%,
							rgba(0, 0, 0, 0) 37.5%
						);
						border-radius: 12px;
						pointer-events: none;
					"
				></div>
				<div
					style="
						position: absolute;
						inset: 0;
						z-index: 2;
						backdrop-filter: blur(0.5625px);
						-webkit-backdrop-filter: blur(0.5625px);
						mask-image: linear-gradient(
							to bottom,
							rgba(0, 0, 0, 0) 12.5%,
							rgba(0, 0, 0, 1) 25%,
							rgba(0, 0, 0, 1) 37.5%,
							rgba(0, 0, 0, 0) 50%
						);
						-webkit-mask-image: linear-gradient(
							to bottom,
							rgba(0, 0, 0, 0) 12.5%,
							rgba(0, 0, 0, 1) 25%,
							rgba(0, 0, 0, 1) 37.5%,
							rgba(0, 0, 0, 0) 50%
						);
						border-radius: 12px;
						pointer-events: none;
					"
				></div>
				<div
					style="
						position: absolute;
						inset: 0;
						z-index: 3;
						backdrop-filter: blur(1.125px);
						-webkit-backdrop-filter: blur(1.125px);
						mask-image: linear-gradient(
							to bottom,
							rgba(0, 0, 0, 0) 25%,
							rgba(0, 0, 0, 1) 37.5%,
							rgba(0, 0, 0, 1) 50%,
							rgba(0, 0, 0, 0) 62.5%
						);
						-webkit-mask-image: linear-gradient(
							to bottom,
							rgba(0, 0, 0, 0) 25%,
							rgba(0, 0, 0, 1) 37.5%,
							rgba(0, 0, 0, 1) 50%,
							rgba(0, 0, 0, 0) 62.5%
						);
						border-radius: 12px;
						pointer-events: none;
					"
				></div>
				<div
					style="
						position: absolute;
						inset: 0;
						z-index: 4;
						backdrop-filter: blur(2.25px);
						-webkit-backdrop-filter: blur(2.25px);
						mask-image: linear-gradient(
							to bottom,
							rgba(0, 0, 0, 0) 37.5%,
							rgba(0, 0, 0, 1) 50%,
							rgba(0, 0, 0, 1) 62.5%,
							rgba(0, 0, 0, 0) 75%
						);
						-webkit-mask-image: linear-gradient(
							to bottom,
							rgba(0, 0, 0, 0) 37.5%,
							rgba(0, 0, 0, 1) 50%,
							rgba(0, 0, 0, 1) 62.5%,
							rgba(0, 0, 0, 0) 75%
						);
						border-radius: 12px;
						pointer-events: none;
					"
				></div>
				<div
					style="
						position: absolute;
						inset: 0;
						z-index: 5;
						backdrop-filter: blur(4.5px);
						-webkit-backdrop-filter: blur(4.5px);
						mask-image: linear-gradient(
							to bottom,
							rgba(0, 0, 0, 0) 50%,
							rgba(0, 0, 0, 1) 62.5%,
							rgba(0, 0, 0, 1) 75%,
							rgba(0, 0, 0, 0) 87.5%
						);
						-webkit-mask-image: linear-gradient(
							to bottom,
							rgba(0, 0, 0, 0) 50%,
							rgba(0, 0, 0, 1) 62.5%,
							rgba(0, 0, 0, 1) 75%,
							rgba(0, 0, 0, 0) 87.5%
						);
						border-radius: 12px;
						pointer-events: none;
					"
				></div>
				<div
					style="
						position: absolute;
						inset: 0;
						z-index: 6;
						backdrop-filter: blur(9px);
						-webkit-backdrop-filter: blur(9px);
						mask-image: linear-gradient(
							to bottom,
							rgba(0, 0, 0, 0) 62.5%,
							rgba(0, 0, 0, 1) 75%,
							rgba(0, 0, 0, 1) 87.5%,
							rgba(0, 0, 0, 0) 100%
						);
						-webkit-mask-image: linear-gradient(
							to bottom,
							rgba(0, 0, 0, 0) 62.5%,
							rgba(0, 0, 0, 1) 75%,
							rgba(0, 0, 0, 1) 87.5%,
							rgba(0, 0, 0, 0) 100%
						);
						border-radius: 12px;
						pointer-events: none;
					"
				></div>
				<div
					style="
						position: absolute;
						inset: 0;
						z-index: 7;
						backdrop-filter: blur(18px);
						-webkit-backdrop-filter: blur(18px);
						mask-image: linear-gradient(
							to bottom,
							rgba(0, 0, 0, 0) 75%,
							rgba(0, 0, 0, 1) 87.5%,
							rgba(0, 0, 0, 1) 100%
						);
						-webkit-mask-image: linear-gradient(
							to bottom,
							rgba(0, 0, 0, 0) 75%,
							rgba(0, 0, 0, 1) 87.5%,
							rgba(0, 0, 0, 1) 100%
						);
						border-radius: 12px;
						pointer-events: none;
					"
				></div>
				<div
					style="
						position: absolute;
						inset: 0;
						z-index: 8;
						backdrop-filter: blur(36px);
						-webkit-backdrop-filter: blur(36px);
						mask-image: linear-gradient(
							to bottom,
							rgba(0, 0, 0, 0) 87.5%,
							rgba(0, 0, 0, 1) 100%
						);
						-webkit-mask-image: linear-gradient(
							to bottom,
							rgba(0, 0, 0, 0) 87.5%,
							rgba(0, 0, 0, 1) 100%
						);
						border-radius: 12px;
						pointer-events: none;
					"
				></div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.blur-overlay {
	align-content: center;
	align-items: center;
	display: flex;
	flex: none;
	flex-direction: column;
	flex-wrap: nowrap;
	gap: 10px;
	height: 100vh;
	justify-content: flex-end;
	left: calc(50.00000000000002% - 100% / 2);
	overflow: hidden;
	padding: 0;
	pointer-events: none;
	position: fixed;
	top: calc(50.00000000000002% - 100vh / 2);
	width: 100%;
	z-index: 7;

	&__wrapper {
		flex: none;
		height: 194px;
		position: relative;
		width: 100%;
		z-index: 9;
	}
}
</style>
