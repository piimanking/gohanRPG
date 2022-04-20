import { enemy } from 'enemies';
import { mough, pouler, shiden } from 'friends';
import { Timelines } from './Timelines';
import { Direction } from './Direction';
import { addShiden } from './timelineWords2';
//テスト
export const timelineData: Timelines = {
  start: [
    { type: 'dialog', text: '・・・・\n・・ ▼' },
    { type: 'dialog', text: 'う、うーん・・・ ▼' },
    { type: 'setBackgroundImage', x: 400, y: 300, key: 'street' },
    { type: 'dialog', text: 'ここは・・・？ ▼' },
    { type: 'addForeground', x: 300, y: 300, key: 'robot' },
    { type: 'dialog', text: '目が覚めましたか ▼', actorName: '???' },
    { type: 'dialog', text: 'アンドロイド・・・？ ▼' },
    { type: 'dialog', text: '私は「ACT-42」 ▼', actorName: '???' },
    { type: 'dialog', text: '早速ですが—— ▼', actorName: 'ACT-42' },
    { type: 'dialog', text: 'あなたは追われています ▼', actorName: 'ACT-42' },
    { type: 'dialog', text: '一刻も早くここから逃げた方がいい ▼', actorName: 'ACT-42' },
    { type: 'timelineTransition', timelineID: 'choice01' },
  ],
  choice01: [
    { type: 'setBackgroundImage', x: 400, y: 300, key: 'street' },
    { type: 'addForeground', x: 400, y: 300, key: 'robot' },
    { type: 'dialog', text: '一緒に逃げましょう ▼', actorName: 'ACT-42' },
    {
      type: 'choice',
      choices: [
        { text: 'はい', timelineID: 'choice01_a01' },
        { text: 'いいえ', timelineID: 'choice01_a02' },
        { text: 'アンドロイド風情が話しかけるな', timelineID: 'choice01_a03' },
      ],
    },
  ],
  choice01_a01: [
    { type: 'setBackgroundImage', x: 400, y: 300, key: 'street' },
    { type: 'addForeground', x: 400, y: 300, key: 'robot' },
    { type: 'dialog', text: '事情はつかめないけどとりあえず従っておこう ▼' },
    { type: 'dialog', text: 'よろしい。ではこちらへ来てください ▼', actorName: 'ACT-42' },
    { type: 'clearForeground' },
    { type: 'dialog', text: 'こうして銀河を股にかけた物語が始まるのであった・・・ ▼' },
    { type: 'endTimeline' },
  ],
  choice01_a02: [
    { type: 'setBackgroundImage', x: 400, y: 300, key: 'street' },
    { type: 'addForeground', x: 400, y: 300, key: 'robot' },
    { type: 'dialog', text: '・・・困りましたね ▼', actorName: 'ACT-42' },
    { type: 'dialog', text: '今は事情を話している暇がないんです ▼', actorName: 'ACT-42' },
    { type: 'dialog', text: 'あなたは捕まるべきではない ▼', actorName: 'ACT-42' },
    { type: 'dialog', text: 'もう一度聞きますね？ ▼', actorName: 'ACT-42' },
    { type: 'timelineTransition', timelineID: 'choice01' },
  ],
  choice01_a03: [
    { type: 'setBackgroundImage', x: 400, y: 300, key: 'street' },
    { type: 'addForeground', x: 400, y: 300, key: 'robot' },
    { type: 'dialog', text: '・・・・・・ ▼', actorName: 'ACT-42' },
    { type: 'dialog', text: 'わかりました。それでは私はこれで ▼', actorName: 'ACT-42' },
    { type: 'clearForeground' },
    { type: 'dialog', text: '・・・・・・ ▼' },
    {
      type: 'dialog',
      text: 'この後俺は謎の組織に捕まり色々されてしまうのだった・・・ ▼',
    },
    { type: 'endTimeline' },
  ],
};
//共通
export const select: Timelines = {
  start: [
    {
      type: 'choice',
      choices: [
        { text: 'stage0', timelineID: 'choice01_a00' },
        { text: 'stage1', timelineID: 'choice01_a01' },
        { text: 'stage2', timelineID: 'choice01_a02' },
        { text: 'stage3', timelineID: 'choice01_a03' },
        { text: 'stage4', timelineID: 'choice01_a04' },
        { text: 'stage5', timelineID: 'choice01_a05' },
      ],
    },
  ],
  choice01_a00: [{ type: 'switch', scene: 'map0' }, { type: 'endTimeline' }],
  choice01_a01: [{ type: 'switch', scene: 'map1' }, { type: 'endTimeline' }],
  choice01_a02: [{ type: 'switch', scene: 'map2' }, { type: 'endTimeline' }],
  choice01_a03: [{ type: 'switch', scene: 'map3' }, { type: 'endTimeline' }],
  choice01_a04: [{ type: 'switch', scene: 'map4' }, { type: 'endTimeline' }],
  choice01_a05: [{ type: 'switch', scene: 'map5' }, { type: 'endTimeline' }],
};

export const warp0: Timelines = {
  start: [{ type: 'switch', scene: 'map0' }, { type: 'endTimeline' }],
};

export const noComment: Timelines = {
  start: [
    {
      type: 'dialog',
      text: 'ハハッ!\nハハハッ!\nハハハハッ!\n',
      actorName: 'マウスカーソル',
    },
    { type: 'endTimeline' },
  ],
};
export const dummy: Timelines = {
  start: [
    {
      type: 'dialog',
      text: 'ハハッ!\nこの先はまだ未完成なんだ。\nごめんね!',
      actorName: 'マウスカーソル',
    },
    { type: 'endTimeline' },
  ],
};
//Home
export const prologue: Timelines = {
  start: [
    {
      type: 'dialog',
      actorName: 'マルク',
      text: 'はぁーあ、最近のヤトウはロクなのがいねぇなぁ…ん？',
    },
    { type: 'dialog', actorName: 'マルク', text: '魔王を倒せたら大盛りご飯無料？？' },
    { type: 'dialog', actorName: 'マルク', text: 'へぇ…腹減ってんだ、ちょうどいい。' },
    {
      type: 'dialog',
      actorName: 'マルク',
      text: '魔王でもヤトウでも、俺が倒してやろうじゃねーか！',
    },
    { type: 'endTimeline' },
  ],
};

export const zoomUp: Timelines = {
  start: [
    { type: 'event', event: 'zoomUp', props: [] },
    { type: 'dialog', text: '暑さで目がくらみ視界が悪くなってしまった！' },
    { type: 'endTimeline' },
  ],
};
/*シデン先生のtimelineWords書き換え講座
{
      type: 'event',
      event: 'kill',
      props: [
        [29,8],
        [30,8]
      ],
    },

{
  type: 'event',
  event: 'kill',
  contents: {
    xy: [
      { x: 29, y: 8 },
      { x: 30, y: 8 },
    ],
  },
},


    { type: 'event', event: 'delete', props: ['beforeAte'] },

    { type: 'event', event: 'delete', contents: {name:'beforeAte'} },

    { type: 'event', event: 'event', props: ['startA', 4, 22, desertGotsuji] },

    { type: 'event', event: 'event', contents: {name:'startA',x: 4, y:22, timeline:desertGotsuji },

    { type: 'event', event: 'event', props: ['startB', 4, 22, desertGotsuji, 'map0'] },

    { type: 'event', event: 'event', contents: {name:'startB',x: 4, y:22, timeline:desertGotsuji, setEventMap:'map0' },
    
    {
      type: 'event',
      event: 'chdir',
      props: ['notMob', 'left' ],
    },

    {
      type: 'event',
      event: 'chdir',
      contents: { name: 'notMob', direction: Direction.LEFT },
    },

    { type: 'event', event: 'set', props: ['Shiden', 6, 23, undefined] },

    { type: 'event', event: 'set', contents: {name:'Shiden', x:6,y: 23,timeline: undefined} },

    { type: 'event', event: 'reset', props: ['stoper1']},

    { type: 'event', event: 'reset', contents: { name: 'stoper1' } },
    
    { type: 'event', event: 'break', props: ['Ate'] },

    { type: 'event', event: 'break', contents: {name:'Ate'} },

    { type: 'event', event: 'move', props: ['left'] },

    { type: 'event', event: 'move', contents: {direction:Direction.LEFT} },

    { type: 'event', event: 'log', props: ['player', 3] },

    { type: 'event', event: 'log', contents:{name:'player', bubbleIndex:3} },

    { type: 'event', event: 'bosslog', props: [4] },

    { type: 'event', event: 'bosslog', contents: {bubbleIndex:4} },

    { type: 'event', event: 'relog', props: [] },

    { type: 'event', event: 'relog', contents: {name:'proto'} },
    
    { type: 'event', event: 'warp', props: [13, 7] },

    { type: 'event', event: 'warp', contents: {x:13,y: 7} },

    {
      type: 'event',
      event: 'battle',
      props: [enemy.ate],
    },

    {
      type: 'event',
      event: 'battle',
      contents: {battleActor:enemy.ate},
    },
    
    */
