<template>
	<view>
		<div class="head">
			<div class="head_l">{{currentPage}}/{{totalPages}}题</div>
			<div class="head_r">
				<image src="/static/icon_time.png"></image><span>{{countDown}}秒</span>
			</div>
		</div>
		<div class="banner">
			<image src="/static/jiemian_15.png"></image>
			<div class="banner_text">{{topic}}</div>
			<div class="banner_input">{{ unit }}</div>
			<div class="banner_clear" @click="unit=''">
				<image src="/static/button_shanchu.png"></image>
			</div>
		</div>
		<div class="content">
			<ul>
				<li v-for="item in btnList" :key="item" @click="calculateUnit(item)">{{item}}</li>
				<li @click="nextQuestion()">{{lastBtnText}}</li>
			</ul>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				totalPages: 5,
				currentPage: 1,
				lastBtnText: "下一题",
				unit: "",
				btnList: ["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0"],
				countDown: 120,
				_countDown: 0,
				timer: null,
				topic: "",
				answer: 0,
				correctTopic: 0,
				errorTopic: 0
			}
		},
		onLoad() {
			this.GenerationProblems();
			this._countDown = this.countDown;
			this.timer = setInterval(() => {
				if (this.countDown > 0) {
					this.countDown--;
				} else {
					clearInterval(this.timer);
				}
			}, 1000)
		},
		methods: {
			calculateUnit(number) {
				if (this.unit.length < 9) {
					if (number == ".") {
						if (this.unit.indexOf(".") < 0 && this.unit.length > 0) {
							this.unit += number;
						}
					} else {
						this.unit += number;
					}
				}
			},
			nextQuestion() {
				if (this.unit == "") {
					uni.showToast({
						icon: "none",
						title: '请输入答案',
						duration: 1000
					});
				} else {
					if (this.answer == this.unit) {
						this.correctTopic++;
					} else {
						this.errorTopic++;
					}
					if (this.lastBtnText == "下一题") {
						this.currentPage++;
						this.GenerationProblems();
						if (this.currentPage >= this.totalPages) {
							this.lastBtnText = "提交";
						}
					} else {
						var count = this._countDown - this.countDown;
						uni.navigateTo({
							url: '../page/ResultsStatistical?a=' + this.correctTopic + "&b=" + this.errorTopic +
								"&c=" + count
						});
					}
				}
			},
			GenerationProblems() {
				this.unit = "";
				var strA = Math.round(Math.random() * 20);
				var strB = Math.round(Math.random() * 20);
				var strC = Math.round(Math.random() * 20);
				var strD = (Math.round(Math.random() * 20) % 2) == 0 ? "+" : "-";
				var strE = (Math.round(Math.random() * 20) % 2) == 0 ? "+" : "-";
				if (eval(strA + strD + strB + strE + strC) < 0) {
					this.GenerationProblems();
				} else {
					this.answer = eval(strA + strD + strB + strE + strC);
					this.topic = strA + strD + strB + strE + strC + "=";
				}
			}
		},
		onHide() {
			clearInterval(this.timer);
		}
	}
</script>

<style>
	page {
		background-color: #354c74;
	}

	.head {
		color: #ffffff;
		height: 5vh;
		line-height: 5vh;
		font-size: 4.2vw;
	}

	.head_l {
		float: left;
		margin-left: 3vw;
	}

	.head_r {
		float: right;
		margin-right: 3vw;
		display: flex;
		align-items: center;
	}

	.head_r image {
		width: 5vw;
		height: 5.8vw;
		margin-right: 0.5vw;
	}

	.banner {
		width: 100%;
		height: 11vh;
		position: relative;
		color: #ffffff;
		font-size: 6vw;
	}

	.banner>image {
		width: 100%;
		height: 100%;
	}

	.banner_text {
		position: absolute;
		right: 63%;
		top: 50%;
		transform: translateY(-50%);
	}

	.banner_input {
		position: absolute;
		left: 40%;
		top: 50%;
		transform: translateY(-50%);
		width: 35%;
		text-align: center;
		overflow: hidden;
	}

	.banner_clear {
		position: absolute;
		right: 5%;
		top: 50%;
		transform: translateY(-50%);
		width: 6.2vh;
		height: 6.2vh;
	}

	.banner_clear image {
		width: 6.2vh;
		height: 6.2vh;
	}

	.content {
		width: 100%;
		height: 72vh;
	}

	.content ul {
		width: 94%;
		height: 100%;
		margin-left: 3vw;
		display: flex;
		justify-content: space-around;
		align-content: space-around;
		flex-wrap: wrap;
	}

	.content ul li {
		width: 23vw;
		height: 23vw;
		margin: 0 4vw;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 7vw;
		background-color: #5981d3;
		color: #ffffff;
		border-radius: 26vw;
	}

	.content ul li:last-of-type {
		font-size: 5vw;
	}
</style>
