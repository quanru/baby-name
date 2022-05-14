const fs = require('fs');
const lastName = '林';
const list = [
  { "word": "南", "type": "火", "stoke": 9 },
  { "word": "庭", "type": "火", "stoke": 9 },
  { "word": "映", "type": "火", "stoke": 9 },
  { "word": "亭", "type": "火", "stoke": 9 },
  { "word": "郎", "type": "火", "stoke": 9 },
  { "word": "显", "type": "火", "stoke": 9 },
  { "word": "珑", "type": "火", "stoke": 9 },
  { "word": "春", "type": "金", "stoke": 9 },
  { "word": "秋", "type": "金", "stoke": 9 },
  { "word": "钦", "type": "金", "stoke": 9 },
  { "word": "姿", "type": "金", "stoke": 9 },
  { "word": "衽", "type": "金", "stoke": 9 },
  { "word": "妍", "type": "金", "stoke": 9 },
  { "word": "帧", "type": "金", "stoke": 9 },
  { "word": "贞", "type": "火", "stoke": 6 },
  { "word": "驰", "type": "火", "stoke": 6 },
  { "word": "至", "type": "火", "stoke": 6 },
  { "word": "弛", "type": "火", "stoke": 6 },
  { "word": "扬", "type": "火", "stoke": 6 },
  { "word": "仲", "type": "火", "stoke": 6 },
  { "word": "动", "type": "火", "stoke": 6 },
  { "word": "成", "type": "金", "stoke": 6 },
  { "word": "任", "type": "金", "stoke": 6 },
  { "word": "如", "type": "金", "stoke": 6 },
  { "word": "旬", "type": "金", "stoke": 6 },
  { "word": "纤", "type": "金", "stoke": 6 },
  { "word": "戏", "type": "金", "stoke": 6 },
  { "word": "迁", "type": "金", "stoke": 6 },
  { "word": "庄", "type": "金", "stoke": 6 },
  { "word": "灵", "type": "火", "stoke": 7 },
  { "word": "良", "type": "火", "stoke": 7 },
  { "word": "陆", "type": "火", "stoke": 7 },
  { "word": "里", "type": "火", "stoke": 7 },
  { "word": "听", "type": "火", "stoke": 7 },
  { "word": "岛", "type": "火", "stoke": 7 },
  { "word": "邻", "type": "火", "stoke": 7 },
  { "word": "彤", "type": "火", "stoke": 7 },
  { "word": "町", "type": "火", "stoke": 7 },
  { "word": "初", "type": "金", "stoke": 7 },
  { "word": "纯", "type": "金", "stoke": 7 },
  { "word": "孜", "type": "金", "stoke": 7 },
  { "word": "佐", "type": "金", "stoke": 7 },
  { "word": "迟", "type": "金", "stoke": 7 },
  { "word": "序", "type": "金", "stoke": 7 },
  { "word": "酉", "type": "金", "stoke": 7 },
  { "word": "姒", "type": "金", "stoke": 7 },
  { "word": "纾", "type": "金", "stoke": 7 },
  { "word": "登", "type": "火", "stoke": 12 },
  { "word": "敦", "type": "火", "stoke": 12 },
  { "word": "晴", "type": "火", "stoke": 12 },
  { "word": "琢", "type": "火", "stoke": 12 },
  { "word": "缇", "type": "火", "stoke": 12 },
  { "word": "谣", "type": "火", "stoke": 12 },
  { "word": "婷", "type": "火", "stoke": 12 },
  { "word": "媛", "type": "火", "stoke": 12 },
  { "word": "善", "type": "金", "stoke": 12 },
  { "word": "童", "type": "金", "stoke": 12 },
  { "word": "紫", "type": "金", "stoke": 12 },
  { "word": "然", "type": "金", "stoke": 12 },
  { "word": "斯", "type": "金", "stoke": 12 },
  { "word": "琮", "type": "金", "stoke": 12 },
  { "word": "喻", "type": "金", "stoke": 12 },
  { "word": "舒", "type": "金", "stoke": 12 },
  { "word": "赏", "type": "金", "stoke": 12 },
  { "word": "絮", "type": "金", "stoke": 12 },
  { "word": "犀", "type": "金", "stoke": 12 },
  { "word": "貂", "type": "金", "stoke": 12 },
  { "word": "酥", "type": "金", "stoke": 12 },
  { "word": "路", "type": "火", "stoke": 13 },
  { "word": "照", "type": "火", "stoke": 13 },
  { "word": "虞", "type": "火", "stoke": 13 },
  { "word": "遥", "type": "火", "stoke": 13 },
  { "word": "煜", "type": "火", "stoke": 13 },
  { "word": "睦", "type": "火", "stoke": 13 },
  { "word": "暖", "type": "火", "stoke": 13 },
  { "word": "瑙", "type": "火", "stoke": 13 },
  { "word": "稔", "type": "火", "stoke": 13 },
  { "word": "稚", "type": "火", "stoke": 13 },
  { "word": "新", "type": "金", "stoke": 13 },
  { "word": "瑞", "type": "金", "stoke": 13 },
  { "word": "锦", "type": "金", "stoke": 13 },
  { "word": "楚", "type": "金", "stoke": 13 },
  { "word": "瑜", "type": "金", "stoke": 13 },
  { "word": "慈", "type": "金", "stoke": 13 },
  { "word": "靖", "type": "金", "stoke": 13 },
  { "word": "鉴", "type": "金", "stoke": 13 },
  { "word": "甄", "type": "金", "stoke": 13 },
  { "word": "阙", "type": "金", "stoke": 13 },
  { "word": "想", "type": "金", "stoke": 13 },
  { "word": "歆", "type": "金", "stoke": 13 },
  { "word": "愈", "type": "金", "stoke": 13 },
  { "word": "煦", "type": "金", "stoke": 13 },
  { "word": "署", "type": "金", "stoke": 13 },
  { "word": "暄", "type": "金", "stoke": 13 },
  { "word": "酬", "type": "金", "stoke": 13 },
  { "word": "肆", "type": "金", "stoke": 13 },
  { "word": "鹊", "type": "金", "stoke": 13 },
  { "word": "羲", "type": "金", "stoke": 13 },
  { "word": "熙", "type": "金", "stoke": 13 },
];
const nameCandidateList = [];
const nameList = [];
const reverse = (str) => str.split('').reverse().join('');
for (let m = 0; m < list.length; m++) {
  const firstName1 = list[m];

  for (let n = 0; n < list.length; n++) {
    const firstName2 = list[n];
    if (firstName1 !== firstName2) {
      const name = `${firstName1.word}${firstName2.word}`;

      if (nameList.includes(name.split('').reverse().join(''))) {
        continue;
      }

      const item = `${lastName}${name} 笔画：${firstName1.stoke} ${firstName2.stoke}；属性：${firstName1.type + firstName2.type}`;
      const type = `${firstName1.type}${firstName2.type}`;
      const stoke = `${firstName1.stoke}${firstName2.stoke}`;

      if (type !== '火金' && reverse(type) !== '金火') {
        continue;
      }

      if (stoke !== '96' && stoke !== '97' && stoke !== '1312') {
        continue;
      }

      nameCandidateList.push(item);
      console.log(item);
    }
  }
}

fs.writeFileSync(
  './nameCandidateList.md',
  `总数: ${nameCandidateList.length}
${nameCandidateList.map(name => `- [ ] ${name}`).join('\n')}
  `
);
