## Excel 统计函数JS实现库
### 整体JS函数说明

> 1、带A结尾的函数是不忽略文本并把文本TRUE，FALSE处理成1,0，JS和EXCEL同样处理方式
>
> 2、JS会把数字形式的文本，转换为数字，EXCEL会当做0处理，注意此处不同
>
> 3、每个函数都会有链接，并使用链接里面的例子进行JS对应函数的验证
>
> 4、核心函数，平均值，方差，高斯定积分等，依赖sky meeko库
### （1）频数分布处理
* 频数分布处理：FREQUENCY :ok_hand:
### （2）描述统计量计算
####  集中趋势计算
* 算术平均数：AVERAGE、AVERAGEA :ok_hand:
* 几何平均数：GEOMEAN :ok_hand:
* 调和平均数：HARMEAN :ok_hand:
* 中位数：MEDIAN :ok_hand:
* 众数：MODE:ok_hand:
* 四分位数：QUARTILE
* K百分比数值点：PERCENTILE
* 内部平均值：TRIMMEAN :ok_hand:
#### 离散程度计算
* 平均差：AVEDEV:ok_hand:
* 样本标准差：STDEVA、STDEV:ok_hand:
* 总体的标准偏差：STDEVP、STDEVPA:ok_hand:
* 样本方差：VAR、VARA:ok_hand:
* 总体方差：VARP、VARPA:ok_hand:
* 样本偏差平方和：DEVSQ:ok_hand:
####  数据分布形状测度计算
* 偏斜度：SKEW:ok_hand:
* 峰度：KURT:ok_hand:
* 标准化值z：STANDARDIZE:ok_hand:
#### 数值计算
* 计数：COUNT:ok_hand:、COUNTA:ok_hand:
* 极值：MAX:ok_hand:、MAXA:ok_hand:、MIN:ok_hand:、MINA:ok_hand:、LARGE:ok_hand:、SMALL:ok_hand:
* 排序：RANK:ok_hand:、PERCENTRANK:ok_hand:、PERCENTRANK.EXC:ok_hand:
### （3） 概率计算
#### 离散分布概率计算
* 排列：PERMUT:ok_hand:
* 概率之和：PROB（累加概率，过于简单）
* 二项分布：BINOMDIST:ok_hand:、CRITBINOM二项分布的反函数
* 负二项式分布：NEGBINOMDIS:ok_hand:
* 超几何分布：HYPGEOMDIST（质量函数+累计函数）:ok_hand:
* 泊松分布：POISSON（质量函数+累计函数）:ok_hand:
#### 连续变量概率计算

> 注意：连续变量的反函数，一般指累计积分函数的反函数

* 正态分布：NORMDIST密度函数+积分函数）:ok_hand:、NORMINV正态分布反函数:ok_hand: 知道概率反推分布的数值
* 标准正态分布： NORMSDIST期望值=0，标准差=1 的正态分布:ok_hand:、NORMSINV :ok_hand:
* 对数正态分布：LOGNORMDIST（密度函数+积分函数）:ok_hand:，LOGINV:ok_hand:
* 卡方分布：CHIDIST:ok_hand:、CHIINV:ok_hand:
* t分布：TDIST:ok_hand:、TINV:ok_hand:
* F分布：F.DIST（密度函数+积分函数）:ok_hand:、F.INV:ok_hand:
* β概率分布：BETA.DIST、BETAINV:cry: 标准区间0,1 需要对 x进行 映射
* 指数分布：EXPON.DIST（密度函数+积分函数）:ok_hand:
* 韦伯分布：WEIBULL（密度函数+积分函数）:ok_hand:
* Г分布：GAMMADIST（密度函数+积分函数）:ok_hand:、GAMMAINV:ok_hand:
*  GAMMALN:ok_hand:伽玛函数的自然对数
### （4）参数估计
* 均值极限误差计算：CONFIDENCE:ok_hand:
### （5）假设检验
* 方差假设检验：FTEST
* 均值假设检验：TTEST:ok_hand:、ZTEST:ok_hand:
### （6）卡方检验
拟合优度和独立性检验：CHITEST:ok_hand:
### （7）相关、回归分析
* 协方差：COVARIANCE.S:ok_hand: , COVAR=COVARIANCE.P:ok_hand:
* 相关性CORREL=PEARSON:ok_hand:、FISHER:ok_hand:、FISHERINV:ok_hand:
* 线性回归分析：FORECAST:ok_hand:、RSQ:ok_hand:、LINEST、INTERCEPT:ok_hand:、SLOPE:ok_hand:、STEYX、TREND趋势类似FORECAST
* 曲线回归：LOGEST:cry:、GROWTH:ok_hand: