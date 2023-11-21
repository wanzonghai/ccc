import { AudioClip, AudioSource, Node, director, find, resources } from 'cc';
import { Singleton } from '../bases/Singleton';
import Appic from '../tools/Appic';
import { EAudioType } from '../tools/enumes';

export class AudioMgr extends Singleton<AudioMgr> {
    private _audioSource: AudioSource;

    private audioCache: { [key: string]: AudioClip } = {};

    public initAudioMgr(audioClipUrls: string) {
        //@en create a node as audioMgr
        //@zh 创建一个节点作为 audioMgr
        let layer_perRoot = new Node();
        layer_perRoot.name = 'layer_perRoot';

        //@en add to the scene.
        //@zh 添加节点到场景
        director.getScene().addChild(layer_perRoot);
        //@en make it as a persistent node, so it won't be destroied when scene change.
        //@zh 标记为常驻节点，这样场景切换的时候就不会被销毁了
        director.addPersistRootNode(layer_perRoot);
        //@en add AudioSource componrnt to play audios.
        //@zh 添加 AudioSource 组件，用于播放音频。
        this._audioSource = layer_perRoot.addComponent(AudioSource);

        this.preloadAudioArr(audioClipUrls).then(() => {
            console.log(this.audioCache);
        });
    }
    public get audioSource() {
        return this._audioSource;
    }
    public preloadAudio(audioClipUrl: string) {
        if (audioClipUrl) {
            let audioKey: string = audioClipUrl.split('/')[1];

            Appic.DAM.load(this._audioSource.node, audioClipUrl, AudioClip, (clip) => {
                if (clip) {
                    this.audioCache[audioKey] = clip;
                }
            });
        }
    }
    public preloadAudioArr(audioClipUrls: string): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            Appic.DAM.loadDir(this._audioSource.node, audioClipUrls, AudioClip, (clips: AudioClip[]) => {
                clips.forEach((element) => {
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
    playOneShot(soundName: EAudioType, volume: number = 1.0) {
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
    play(soundName: EAudioType, volume: number = 1.0) {
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
}
