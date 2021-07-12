<template>
	<view>
		<div class="popUp_box">
			<div class="popUp_box_img">
				<image src="/static/icon_tiaozhan.png"></image>
			</div>
			<div class="popUp_box_title">成绩统计</div>
			<div class="popUp_box_content">
				<div class="popUp_box_content_child child_t_img">
					<ul>
						<li>二胡二胡</li>
						<li>回答正确：{{correctTopic}}</li>
						<li>回答错误：{{errorTopic}}</li>
						<li>用时：{{time}}秒</li>
					</ul>
					<image src="/static/icon_guanjun.png"></image>
				</div>
				<div class="popUp_box_content_child child_b_img">
					<ul>
						<li>二胡二胡<span>[家长]</span></li>
						<li>回答正确：{{correctTopic}}</li>
						<li>回答错误：{{errorTopic}}</li>
						<li>用时：{{time}}秒</li>
					</ul>
					<image src="/static/icon_shibai.png"></image>
				</div>
			</div>
		</div>
		<text class="content">家长积分+10</text>
		<button class="confirm_btn" @click="confirm()">确定</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				correctTopic: 0,
				errorTopic: 0,
				time: 0
			}
		},
		onLoad(options) {
			this.correctTopic = options.a;
			this.errorTopic = options.b;
			this.time = options.c;
		},
		onBackPress(options) {
			uni.switchTab({
				url: '/pages/index/Home'
			});
			return true;
		},
		methods: {
			confirm() {
				uni.switchTab({
					url: '/pages/index/Home'
				});
			}
		}
	}
</script>

<style>
	page {
		background-color: #20b7c0;
	}

	.popUp_box {
		position: absolute;
		top: 15%;
		left: 50%;
		transform: translateX(-50%);
		width: 80vw;
		height: 45vh;
		background-color: #FFFFFF;
		border-radius: 4vw;
		box-shadow: 0px 2px 10px #909090;
	}

	.popUp_box_img {
		position: absolute;
		top: 0%;
		left: 50%;
		transform: translate(-50%, -40%);
		border: 1.5vw solid #ffffff;
		border-radius: 25vw;
	}

	.popUp_box_img image {
		width: 25vw;
		height: 25vw;
	}

	.popUp_box_title {
		position: absolute;
		left: 0%;
		top: 20%;
		width: 100%;
		text-align: center;
		font-size: 6vw;
		color: #206487;
	}

	.popUp_box_content {
		position: absolute;
		left: 0%;
		top: 30%;
		width: 100%;
		height: 65%;
		display: flex;
		justify-content: center;
		align-content: space-around;
		flex-wrap: wrap;
	}

	.popUp_box_content_child {
		width: 80%;
		height: 45%;
		background-color: #3baeda;
		border-radius: 3vw;
		display: flex;
		align-items: center;
	}

	.child_b_img {
		background-color: #206487;
	}

	.popUp_box_content_child ul {
		width: 50%;
		height: 85%;
		margin-left: 3vw;
		float: left;
		display: flex;
		align-content: space-around;
		flex-wrap: wrap;
		font-size: 4vw;
		color: #ffffff;
	}

	.popUp_box_content_child image {
		float: right;
		margin-left: auto;
		height: 55%;
	}

	.popUp_box_content_child span {
		margin-left: 0.5vw;
		color: #a9dc35;
	}

	.child_t_img image {
		height: 110%;
		margin-bottom: 10%;
		width: 13.6vh;
	}

	.child_b_img image {
		margin-right: 9%;
		width: 7.2vh;
	}

	.content {
		position: absolute;
		top: 65%;
		left: 50%;
		transform: translateX(-50%);
		color: #ffffff;
		font-size: 5vw;
	}

	.confirm_btn {
		width: 80vw;
		height: 13vw;
		line-height: 13vw;
		position: absolute;
		top: 80%;
		left: 50%;
		transform: translateX(-50%);
		background-color: #a9dc35;
		color: #ffffff;
		font-size: 4.5vw;
		text-align: center;
		border-radius: 3vw;
	}
</style>
