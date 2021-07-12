<template>
	<view>
		<view v-if="settingFlag">
			<text class="top_text">请在手表端《快乐口算》应用中查看用户ID</text>
			<image class="setting_img" src="/static/jiemian16.png"></image>
			<view class="setting_form">
				<label>输入用户ID</label>
				<input type="text" v-model="userId" />
				<label>输入ID验证码</label>
				<input type="text" v-model="IdVerification" />
			</view>
			<button class="setting_btn" @click="BindUser()">绑定用户</button>
		</view>
		<view v-else>
			<div class="popUp_box">
				<div class="popUp_box_img" @click="settingFlag = !settingFlag">
					<image src="/static/icon_bangding.png"></image>
				</div>
				<div class="popUp_box_title">已绑定</div>
				<div class="popUp_box_userinfo">
					<ul>
						<li>用户ID：{{userId}}</li>
						<li>ID验证码：{{IdVerification}}</li>
						<li>用户昵称：二胡二胡</li>
					</ul>
				</div>
			</div>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				settingFlag: true,
				userId: "",
				IdVerification: ""
			}
		},
		onLoad() {

		},
		methods: {
			BindUser() {
				if (this.userId == "") {
					uni.showToast({
						icon: 'none',
						title: '请输入用户ID'
					});
				} else if (this.IdVerification == "") {
					uni.showToast({
						icon: 'none',
						title: '请输入ID验证码'
					});
				} else {
					this.settingFlag = !this.settingFlag;
				}
			}
		}
	}
</script>

<style>
	page {
		background-color: #20b7c0;
	}

	.top_text {
		width: 100%;
		text-align: center;
		position: absolute;
		top: 1%;
		left: 0%;
		font-size: 3.5vw;
		color: #ffffff;
	}

	.setting_img {
		width: 40%;
		height: 44.8vw;
		position: absolute;
		top: 7%;
		left: 50%;
		transform: translateX(-50%);
	}

	.setting_form {
		width: 100%;
		position: absolute;
		top: 40%;
		left: 0%;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		text-align: center;
	}

	.setting_form label {
		width: 100%;
		height: 10vw;
		line-height: 10vw;
		color: #ffffff;
		font-size: 4.5vw;
	}

	.setting_form input {
		width: 80vw;
		height: 13vw;
		line-height: 13vw;
		background-color: #ffffff;
		border-radius: 3vw;
	}

	.setting_btn {
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

	.popUp_box {
		position: absolute;
		top: 15%;
		left: 50%;
		transform: translateX(-50%);
		width: 80vw;
		height: 80vw;
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

	.popUp_box_userinfo {
		position: absolute;
		left: 0%;
		top: 35%;
		width: 100%;
		height: 50%;
		display: flex;
		justify-content: center;
		align-content: space-around;
		flex-wrap: wrap;
	}

	.popUp_box_userinfo ul {
		width: 60%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-content: space-around;
		flex-wrap: wrap;
	}

	.popUp_box_userinfo li {
		width: 100%;
		height: 10vw;
		line-height: 10vw;
		background-color: #206487;
		color: #ffffff;
		text-align: center;
		border-radius: 3vw;
		font-size: 4.5vw;
	}
</style>
