System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AudioClip, AudioSource, Node, director, Singleton, Appic, AudioMgr, _crd;

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "../bases/Singleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppic(extras) {
    _reporterNs.report("Appic", "../tools/Appic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEAudioType(extras) {
    _reporterNs.report("EAudioType", "../tools/enumes", _context.meta, extras);
  }

  _export("AudioMgr", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      AudioClip = _cc.AudioClip;
      AudioSource = _cc.AudioSource;
      Node = _cc.Node;
      director = _cc.director;
    }, function (_unresolved_2) {
      Singleton = _unresolved_2.Singleton;
    }, function (_unresolved_3) {
      Appic = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "88a43VvVlVBKa4m3rLIdEfO", "AudioMgr", undefined);

      __checkObsolete__(['AudioClip', 'AudioSource', 'Node', 'director', 'find', 'resources']);

      _export("AudioMgr", AudioMgr = class AudioMgr extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        constructor() {
          super(...arguments);
          this._audioSource = void 0;
          this.audioCache = {};
        }

        initAudioMgr(audioClipUrls) {
          //@en create a node as audioMgr
          //@zh 创建一个节点作为 audioMgr
          var layer_perRoot = new Node();
          layer_perRoot.name = 'layer_perRoot'; //@en add to the scene.
          //@zh 添加节点到场景

          director.getScene().addChild(layer_perRoot); //@en make it as a persistent node, so it won't be destroied when scene change.
          //@zh 标记为常驻节点，这样场景切换的时候就不会被销毁了

          director.addPersistRootNode(layer_perRoot); //@en add AudioSource componrnt to play audios.
          //@zh 添加 AudioSource 组件，用于播放音频。

          this._audioSource = layer_perRoot.addComponent(AudioSource);
          this.preloadAudioArr(audioClipUrls).then(() => {
            console.log(this.audioCache);
          });
        }

        get audioSource() {
          return this._audioSource;
        }

        preloadAudio(audioClipUrl) {
          if (audioClipUrl) {
            var audioKey = audioClipUrl.split('/')[1];
            (_crd && Appic === void 0 ? (_reportPossibleCrUseOfAppic({
              error: Error()
            }), Appic) : Appic).DAM.load(this._audioSource.node, audioClipUrl, AudioClip, clip => {
              if (clip) {
                this.audioCache[audioKey] = clip;
              }
            });
          }
        }

        preloadAudioArr(audioClipUrls) {
          return new Promise((resolve, reject) => {
            (_crd && Appic === void 0 ? (_reportPossibleCrUseOfAppic({
              error: Error()
            }), Appic) : Appic).DAM.loadDir(this._audioSource.node, audioClipUrls, AudioClip, clips => {
              clips.forEach(element => {
                if (this.audioCache[element.name]) return resolve();
                this.audioCache[element.name] = element;
              });
              resolve();
            });
          });
        }
        /**
         * @en
         * play short audio, such as strikes,explosions
         * @zh
         * 播放短音频,比如 打击音效，爆炸音效等
         * @param sound clip or url for the audio
         * @param volume
         */


        playOneShot(soundName, volume) {
          if (volume === void 0) {
            volume = 1.0;
          }

          if (this.audioCache[soundName]) {
            this._audioSource.playOneShot(this.audioCache[soundName], volume);
          }
        }
        /**
         * @en
         * play long audio, such as the bg music
         * @zh
         * 播放长音频，比如 背景音乐
         * @param sound clip or url for the sound
         * @param volume
         */


        play(soundName, volume) {
          if (volume === void 0) {
            volume = 1.0;
          }

          if (this.audioCache[soundName]) {
            this._audioSource.clip = this.audioCache[soundName];

            this._audioSource.play();

            this.audioSource.volume = volume;
          }
        }
        /**
         * stop the audio play
         */


        stop() {
          this._audioSource.stop();
        }
        /**
         * pause the audio play
         */


        pause() {
          this._audioSource.pause();
        }
        /**
         * resume the audio play
         */


        resume() {
          this._audioSource.play();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d99c32d762caea6a53e1a9e4a868b1f9e69b36df.js.map