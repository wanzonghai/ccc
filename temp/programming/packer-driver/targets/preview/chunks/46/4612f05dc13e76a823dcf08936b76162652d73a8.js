System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, tween, SpriteFrame, resources, Label, assetManager, UITransform, Until, _crd;

  _export("Until", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      tween = _cc.tween;
      SpriteFrame = _cc.SpriteFrame;
      resources = _cc.resources;
      Label = _cc.Label;
      assetManager = _cc.assetManager;
      UITransform = _cc.UITransform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a570cu1Is1GYbq2KTfrDmL8", "Until", undefined);

      __checkObsolete__(['tween', 'Node', 'Sprite', 'SpriteFrame', 'resources', 'Label', 'Texture2D', 'Vec2', 'assetManager', 'v2', 'UITransform']);

      _export("Until", Until = class Until {
        /**动作行为
         * 重复自转
         */
        static actionSystem(targetNode, type) {
          switch (type) {
            case 1:
              //重复自转
              tween(targetNode).by(5, {
                angle: 360
              }).repeatForever().start();
              break;

            case 2:
              //呼吸
              tween(targetNode).repeatForever(tween().by(3, {
                scale: -0.3
              }).by(1, {
                scale: 0.3
              })).start();
              break;

            default:
              break;
          } //     cc.tween(this.node)
          // .to(1, { position: cc.v2(100, 100), rotation: 360 })
          // .to(1, { scale: 2 })
          // .start()
          // cc.repeat(cc.sequence(cc.moveBy(2, 200, 0), cc.moveBy(2, -200, 0)), 5);

        } // public static randomNumber(min:number,max:number):number{
        // }


        static foramtDate(dateObj, format) {
          var date = {
            'M+': dateObj.getMonth() + 1,
            'd+': dateObj.getDate(),
            'h+': dateObj.getHours(),
            'm+': dateObj.getMinutes(),
            's+': dateObj.getSeconds(),
            'q+': Math.floor((dateObj.getMonth() + 3) / 3),
            'S+': dateObj.getMilliseconds()
          };

          if (/(y+)/i.test(format)) {
            format = format.replace(RegExp.$1, (dateObj.getFullYear() + '').substr(4 - RegExp.$1.length));
          }

          for (var k in date) {
            if (new RegExp('(' + k + ')').test(format)) {
              format = format.replace(RegExp.$1, ('00' + date[k]).substr(('' + date[k]).length));
            }
          }

          return format;
        }
        /**2020-10-10 */


        static formatTimeData(num, type) {
          var date = new Date(num * 1000);
          var Y = date.getFullYear();
          var M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
          var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
          var h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
          var m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
          var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();

          if (type == 1) {
            return Y + '';
          } else if (type == 2) {
            return Y + '-' + M;
          } else if (type == 3) {
            return Y + '-' + M + '-' + D;
          } else if (type == 4) {
            return Y + '-' + M + '-' + D + ' ' + h;
          } else if (type == 5) {
            return Y + '-' + M + '-' + D + ' ' + h + ':' + m;
          }

          return Y + '-' + M + '-' + D + ' ' + h + ':' + s;
        }
        /** 返回格式为xx天xx小时xx分钟 */


        static formatTimeDay(autoTime1, autoTime2) {
          var date2 = (autoTime1 + autoTime2) * 1000;
          var date3 = Date.now(); //获取当前标准时间

          var date4 = date2 - date3; //时间差的毫秒数
          //计算出相差天数

          var days = Math.floor(date4 / (24 * 3600 * 1000)); // //计算出小时数
          // var leave1 = date3 % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
          // var hours = Math.floor(leave1 / (3600 * 1000));
          // //计算相差分钟数
          // var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
          // var minutes = Math.floor(leave2 / (60 * 1000));
          // //计算相差秒数
          // var leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
          // var seconds = Math.round(leave3 / 1000);
          // console.log(days + '天 ' + hours + '小时 ');
          // console.log(days + '天 ' + hours + '小时 ' + minutes + ' 分钟' + seconds + ' 秒');
          // return days + '天 ' + hours + '小时 ';

          return days;
        }
        /** 返回秒 */


        static formatTimeSec(autoTime1, autoTime2) {
          var date2 = (autoTime1 + autoTime2) * 1000;
          var date3 = Date.now(); //获取当前标准时间

          var date4 = date2 - date3; //时间差的毫秒数
          //计算出相差天数

          var secs = Math.floor(date4 / 1000); // //计算出小时数
          // var leave1 = date3 % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
          // var hours = Math.floor(leave1 / (3600 * 1000));
          // //计算相差分钟数
          // var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
          // var minutes = Math.floor(leave2 / (60 * 1000));
          // //计算相差秒数
          // var leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
          // var seconds = Math.round(leave3 / 1000);
          // console.log(days + '天 ' + hours + '小时 ');
          // console.log(days + '天 ' + hours + '小时 ' + minutes + ' 分钟' + seconds + ' 秒');
          // return days + '天 ' + hours + '小时 ';

          return secs;
        }
        /**科学计数法转换 */


        static toNonExponential(num) {
          var m = num.toExponential().match(/\d(?:\.(\d*))?e([+-]\d+)/);
          return num.toFixed(Math.max(0, (m[1] || '').length - m[2]));
        }

        static c(a) {
          return a.replace(/^(\d+)(?:.(\d+))*eE(\d+)/, (_, a, a1, p, n) => {
            a1 = a1 || '';

            if (p === '-' && n > 0) {
              return '0.' + '0'.repeat(n - 1) + a + a1;
            } else {
              return a + (a1.length > n ? a1.substr(0, n) + '.' + a1.substr(n) : a1 + '0'.repeat(n - a1.length));
            }
          });
        }

        static formatNumber(num) {
          var str = '' + Math.floor(num);
          var newStr = '';
          var count = 0; // 当数字是整数

          if (str.indexOf('.') == -1) {
            for (var i = str.length - 1; i >= 0; i--) {
              if (count % 3 == 0 && count != 0) {
                newStr = str.charAt(i) + ',' + newStr;
              } else {
                newStr = str.charAt(i) + newStr;
              }

              count++;
            }

            str = newStr;
            return str;
          } // 当数字带有小数
          else {
            for (var i = str.indexOf('.') - 1; i >= 0; i--) {
              if (count % 3 == 0 && count != 0) {
                newStr = str.charAt(i) + ',' + newStr;
              } else {
                newStr = str.charAt(i) + newStr; //逐个字符相接起来
              }

              count++;
            }

            str = newStr + (str + '00').substr((str + '00').indexOf('.'), 3);
            return str;
          }
        }
        /**
         * 将数字转成字符串，可以转换超过16位的大数字，但是会丢失精度
         * @param value 数字
         */


        getNumberToString(value) {
          var str = value.toString(); //大于16位，用e表示的大数字，需要转换

          if (str.indexOf('e') != -1) {
            //e位置
            var eIndex = str.indexOf('e'); //小数点位置

            var pIndex = str.indexOf('.'); //是否有小数点, 400000000...这样的数是没有小数点的

            var bHavePoint = pIndex; //小数点位置

            pIndex = pIndex == -1 ? 0 : pIndex; //小数点后的数字位数

            var small = eIndex - pIndex - 1; //e前面的数字

            var result = str.substr(0, eIndex); //如果e前面数字有小数点，则去掉小数点

            if (bHavePoint != -1) {
              result = result.replace('.', '');
            } //e后面的数字


            var eNum = str.substr(eIndex + 2, str.length); //需要添加的0数量

            var len = parseInt(eNum) - small;

            for (var i = 0; i < len; i++) {
              result += '0';
            } //返回最终结果


            return result;
          } else {
            //不是大数字，则直接返回
            return value.toString();
          }
        }
        /**数据转换k m b t a  */


        static formatNumber3(numStr) {
          // let zm = {
          //     k: 'k',
          //     m: 'm',
          //     b: 'b',
          //     t: 't',
          //     a: 'a',
          // };
          numStr = numStr ? numStr : '0';
          var zmfh = '';
          var ASCIICode = 97;
          /**最高位 */

          var lenStr = numStr.length;
          var newNumStr = '';
          var blws = lenStr > 6 ? 5 : 6;

          for (var index = 0; index < lenStr; index++) {
            var element = numStr[index];
            if (index >= blws) break;
            newNumStr += element;
          }

          var num0 = parseInt(newNumStr);
          /**发出的数据 */

          var zsnum = num0; // //获取最高位值
          // num1 = num / mVlue;

          /**输出值2 */
          // let num2: number = num1 * mVlue;

          if (lenStr < 3) {
            return num0 + '';
          } else if (lenStr <= 6) {
            return num0 + '';
          } else if (lenStr == 7) {
            zmfh = String.fromCharCode(107); //k  1234567

            var num2_7 = zsnum / 10;
            return num2_7.toFixed(1) + zmfh;
          } else if (lenStr == 8) {
            zmfh = String.fromCharCode(107); //k

            return zsnum + zmfh;
          } else {
            zsnum = Math.floor(zsnum);
            var numLen_1 = lenStr - 8;
            var numm = 0;
            var numLen_2 = numLen_1 - 9;
            var num2 = Math.floor(numLen_1 % 3);
            if (lenStr <= 11) zmfh = String.fromCharCode(109); //m
            else if (lenStr <= 14) zmfh = String.fromCharCode(98); //b
            else if (lenStr <= 17) zmfh = String.fromCharCode(116); //t
            else {
              zmfh = String.fromCharCode(97); //a

              var aanum = Math.floor(numLen_2 / 3);
              var aAd = num2 == 0 ? 0 : 1;

              if (aanum > 0) {
                ASCIICode += aanum;
                zmfh = String.fromCharCode(97) + String.fromCharCode(ASCIICode - 1);
              }
            }

            if (num2 == 0) {
              return zsnum + zmfh;
            }

            if (num2 == 1) {
              numm = zsnum / 100;
              return numm.toFixed(2) + zmfh;
            }

            if (num2 == 2) {
              numm = zsnum / 10;
              return numm.toFixed(1) + zmfh;
            }
          }
        }

        static setItemSpriteFrame(sprite, url, successCB) {
          if (successCB === void 0) {
            successCB = null;
          }

          sprite['spriteFrameName'] = url;
          resources.load(url, (err, spriteFrame) => {
            if (sprite.isValid && sprite['spriteFrameName'] == url) {
              sprite.spriteFrame = spriteFrame;

              if (successCB) {
                successCB(sprite);
              }
            }
          });
        }
        /**
         * 转化成带有小数点的K,M,B
         * @param number
         * @param decimals
         */


        static formatEngNumber(number, decimals) {
          if (decimals === void 0) {
            decimals = 2;
          }

          var str;
          var num;
          number = number;

          if (number >= 1000000) {
            num = number / 1000000;
            str = (Math.floor(num / 0.001) * 0.001).toFixed(decimals);
            return this.formatEndingZero(str) + 'M';
          } else if (number >= 1000) {
            num = number / 1000;
            str = (Math.floor(num / 0.001) * 0.001).toFixed(decimals);
            return this.formatEndingZero(str) + 'K';
          } else {
            return number + '';
          }
        }

        static formatEndingZero(c) {
          if (c.indexOf('.') != -1) {
            if (this.endWith(c, '00')) {
              return c.substring(0, c.length - 3);
            } else if (this.endWith(c, '0')) {
              return c.substring(0, c.length - 1);
            }
          }

          return c;
        }

        static endWith(c, suffix) {
          return suffix == c.substring(c.length - suffix.length);
        }

        static makeMaxWidthLabel(label, width) {
          var obj = {};
          obj['__proto__'] = label;
          Object.defineProperty(obj, 'string', {
            configurable: true,
            enumerable: true,

            get() {
              return label.string;
            },

            set(str) {
              label.overflow = Label.Overflow.NONE;
              label.string = str;
              label['_updateRenderData'](true);

              if (label.node.getComponent(UITransform).width > width) {
                label.overflow = Label.Overflow.RESIZE_HEIGHT;
                label.node.getComponent(UITransform).setContentSize(width, 1);
                label.string = str;
              }
            }

          });
          return obj;
        }

        static climeUserName(name, showLen) {
          if (showLen === void 0) {
            showLen = 14;
          }

          var len = name.length;

          while (this.strlen(name) > showLen) {
            name = name.substring(0, name.length - 1);
          }

          if (name.length != len) {
            name = name + '...';
          }

          return name;
        }

        static strlen(str) {
          var len = 0;

          for (var i = 0; i < str.length; i++) {
            var c = str.charCodeAt(i); //单字节加1

            if (c >= 0x0001 && c <= 0x007e || 0xff60 <= c && c <= 0xff9f) {
              len++;
            } else {
              len += 2;
            }
          }

          return len;
        }
        /** 打乱数组 */


        static shuffleArr(arr) {
          var _swap = (a, b) => {
            var tmp = arr[a];
            arr[a] = arr[b];
            arr[b] = tmp;
          };

          var len = arr.length;

          for (var i = 0; i < len; i++) {
            var idx = Math.floor(Math.random() * (len - i));

            _swap(idx, len - i - 1);
          }

          return arr;
        }
        /** 二分查找, findFlag 为false表示没找到的时候返回一个较小的, 为true返回一个较大的 */


        static binarySearch(arr, target, findFlag) {
          if (findFlag === void 0) {
            findFlag = false;
          }

          var start = 0,
              end = arr.length - 1;

          while (end - start > 1) {
            var idx = Math.floor((start + end) / 2);

            if (target < arr[idx]) {
              end = idx;
            } else if (target > arr[idx]) {
              start = idx;
            } else {
              return idx;
            }
          } // 没有找到对应的值


          if (!findFlag) {
            if (end == 0) return -1;
            return start;
          } else {
            if (start == arr.length - 1) return arr.length;
            return end;
          }
        } // // 判断一个点是否在三角形内
        // public static isInTriangle(point: Vec2, triA: Vec2, triB: Vec2, triC: Vec2) {
        //     let AB = triB.sub(triA),
        //         AC = triC.sub(triA),
        //         BC = triC.sub(triB),
        //         AD = point.sub(triA),
        //         BD = point.sub(triB);
        //     //@ts-ignore
        //     return AB.cross(AC) >= 0 !== AB.cross(AD) < 0 && AB.cross(AC) >= 0 !== AC.cross(AD) >= 0 && BC.cross(AB) > 0 !== BC.cross(BD) >= 0;
        // }


        static isInPolygon(checkPoint, polygonPoints) {
          var counter = 0,
              i,
              xinters;
          var p1, p2;
          var pointCount = polygonPoints.length;
          p1 = polygonPoints[0];

          for (i = 1; i <= pointCount; i++) {
            p2 = polygonPoints[i % pointCount];

            if (checkPoint.x > Math.min(p1.x, p2.x) && checkPoint.x <= Math.max(p1.x, p2.x)) {
              if (checkPoint.y <= Math.max(p1.y, p2.y)) {
                if (p1.x != p2.x) {
                  xinters = (checkPoint.x - p1.x) * (p2.y - p1.y) / (p2.x - p1.x) + p1.y;

                  if (p1.y == p2.y || checkPoint.y <= xinters) {
                    counter++;
                  }
                }
              }
            }

            p1 = p2;
          }

          return (counter & 1) !== 0;
        } // // 多边形 三角切割
        // public static splitePolygon(points: Vec2[]): number[] {
        //     if (points.length <= 3) return [0, 1, 2];
        //     let pointMap: { [key: string]: number } = {}; // point与idx的映射
        //     for (let i = 0; i < points.length; i++) {
        //         let p = points[i];
        //         pointMap[`${p.x}-${p.y}`] = i;
        //     }
        //     const getIdx = (p: Vec2) => {
        //         return pointMap[`${p.x}-${p.y}`];
        //     };
        //     points = points.concat([]);
        //     let idxs: number[] = [];
        //     let index = 0;
        //     while (points.length > 3) {
        //         let p1 = points[index % points.length],
        //             p2 = points[(index + 1) % points.length],
        //             p3 = points[(index + 2) % points.length];
        //         let splitPoint = (index + 1) % points.length;
        //         let v1 = p2.sub(p1);
        //         let v2 = p3.sub(p2);
        //         if (v1.cross(v2) < 0) {
        //             // 是一个凹角, 寻找下一个
        //             index = (index + 1) % points.length;
        //             continue;
        //         }
        //         let hasPoint = false;
        //         for (const p of points) {
        //             if (p != p1 && p != p2 && p != p3 && this.isInTriangle(p, p1, p2, p3)) {
        //                 hasPoint = true;
        //                 break;
        //             }
        //         }
        //         if (hasPoint) {
        //             // 当前三角形包含其他点, 寻找下一个
        //             index = (index + 1) % points.length;
        //             continue;
        //         }
        //         // 找到了耳朵, 切掉
        //         idxs.push(getIdx(p1), getIdx(p2), getIdx(p3));
        //         points.splice(splitPoint, 1);
        //     }
        //     for (const p of points) {
        //         idxs.push(getIdx(p));
        //     }
        //     return idxs;
        // }
        // /** 计算uv, 锚点都是中心 */
        // public static computeUv(points: Vec2[], width: number, height: number) {
        //     let uvs: Vec2[] = [];
        //     for (const p of points) {
        //         // uv原点是左上角
        //         let x = MathUtils.clamp(0, 1, (p.x + width / 2) / width);
        //         let y = MathUtils.clamp(0, 1, 1 - (p.y + height / 2) / height);
        //         uvs.push(v2(x, y));
        //     }
        //     return uvs;
        // }


        static tweenFloat(from, to, duration, onUpdate, onComplete, autoStart) {
          if (autoStart === void 0) {
            autoStart = true;
          }

          var o = {
            _value: from
          };
          Object.defineProperty(o, 'value', {
            get: () => o._value,
            set: v => {
              o._value = v;
              onUpdate && onUpdate(o._value);
            }
          });

          var _tween = tween(o).to(duration, {
            value: to
          }).call(onComplete);

          if (autoStart) {
            _tween.start();
          }

          return _tween;
        }

        static tweenVec2(from, to, duration, onUpdate, onComplete, autoStart) {
          if (autoStart === void 0) {
            autoStart = true;
          }

          var o = {
            _value: from
          };
          Object.defineProperty(o, 'value', {
            get: () => o._value,
            set: v => {
              o._value = v;
              onUpdate && onUpdate(o._value);
            }
          });

          var _tween = tween(o).to(duration, {
            value: to
          }).call(onComplete);

          if (autoStart) {
            _tween.start();
          }

          return _tween;
        }
        /**加载头像地址转换成texture */


        static _loadSprte(url) {
          return new Promise((resolve, reject) => {
            assetManager.loadRemote(url, {
              ext: '.png'
            }, (err, texture) => {
              if (err) return;
              var newSpriteFrame = new SpriteFrame();
              resolve(newSpriteFrame);
            });
          });
        }

        static AddHeadSprite(url, Sprite_head) {
          assetManager.loadRemote(url, {
            ext: '.png'
          }, function (err, tex) {
            Sprite_head.spriteFrame = new SpriteFrame();
          });
        } // 随机生成玩家英文名字


        static generateRandomName() {
          var adjectives = ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange'];
          var nouns = ['Player', 'Gamer', 'Hero', 'Ninja', 'Wizard', 'Pirate'];
          var randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
          var randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
          return "" + randomAdjective + randomNoun;
        } //  生成随机字符串


        static generateRandomString(length) {
          var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
          var randomString = '';

          for (var i = 0; i < length; i++) {
            var randomIndex = Math.floor(Math.random() * characters.length);
            randomString += characters.charAt(randomIndex);
          }

          return randomString;
        } // 随机生成玩家ID


        static generateRandomPlayerId() {
          return Math.random().toString(36).substring(2, 12);
        } // 随机生成玩家avatar


        static generateRandomAvatar() {
          // 你可以自行定义一些默认的头像链接，或者使用头像生成库来生成随机头像链接。
          // 这里只提供一个示例返回一个固定的头像链接。
          return 'https://example.com/default-avatar.png';
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4612f05dc13e76a823dcf08936b76162652d73a8.js.map