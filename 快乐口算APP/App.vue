<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	page {
		background-color: #f7f7f7;
	}

	html,
	body,
	div,
	img,
	span,
	p,
	ul,
	li,
	i,
	b {
		margin: 0;
		padding: 0;
	}

	ul {
		list-style: none;
	}

	.uni-page-head__title {
		color: #4fc0e8;
		font-size: 4.5vw !important;
		font-weight: normal !important;
	}

	.uni-page-head-btn .uni-btn-icon {
		color: #4fc0e8 !important;
		font-weight: bold;
	}
</style>
