import {post} from "../config/ajax";
const url1='/lotteryAction';
const url2='/frontRightAction';
const url3='/frontAction';
export const getGameList =(paramObj)=>post(url1+'/getLotteryKind.asp');//获取游戏列表
export const login =(data)=>post(url2+'/loginUser.asp',data);//登录
export const getUserInfo =(data)=>post(url1+'/getUserInfo.asp',data);//获取用户信息
export const getBetOdds =(data)=>post(url1+'/getLotteryOdds.asp',data);//获取赔率
export const getLotteryHeader =(data)=>post(url1+'/getLotteryHead.asp',data);//获取投注页头部
export const betSubmit =(data)=>post(url1+'/saveLotteryDataInfo.asp',data);//投注
export const getZodiacSign =(data)=>post(url1+'/getLotteryZodiac.asp',data);//获取生肖
export const getLotteryResult = (data)=>post(url1+'/getLotteryResult.asp',data);//获取开奖结果
export const getBetHistoryRecord = (data)=>post(url1+'/getBetHistoryRecord.asp',data);//获取投注记录
export const getSysParamInfo = (data)=>post(url1+'/getSysParamInfo.asp',data);//获取title
export const getLotteryRoad = (data)=>post(url1+'/getLotteryRoad.asp',data);// 获取路珠数据
export const getLotteryMissing = (data)=>post(url1+'/getLotteryMissing.asp',data);// 获取长龙数据
export const getUserMoney = (data)=>post(url3+'/refreshUserMoney.asp',data);// 获取用户余额
export const getRealLotteryOdds =(data)=>post(url1+'/getPayDownOdds.asp',data);// 降赔
export const refreshPlatformMoney =(data)=>post(url3+'/refreshPlatformMoney.asp',data);// 刷新用户余额
export const openSourceResult =(data)=>post(url1+'/openSourceResult.asp',data);// 号源校验
export const getReport =(data)=>post(url1+'/getUserDefectReportMes.asp',data);// 获取历史报表
export const getDiscMes =(data)=>post(url1+'/getDiscMes.asp',data);// 获取盘口
export const getLotterytime =(data)=>post(url1+'/getCountdownTime.asp',data);// 获取彩种时间
