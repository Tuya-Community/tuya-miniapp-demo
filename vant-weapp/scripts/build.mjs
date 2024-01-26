#!/usr/bin/env zx

import { $, fs, glob } from "zx";

const root = path.resolve(__dirname, "../");

const files = await glob("dist/*/index.json", {cwd: root});

files.forEach((file) => {
  let f = path.resolve(root, file);
  fs.unlinkSync(f);

  ['../index.wxml', '../index.wxss', '../index.js', '../index.wxs', '../index.d.ts'].forEach((d) => {
   const e = path.resolve(f, d);
   if (fs.existsSync(e)) {
     fs.unlinkSync(e);
   }
  })


});


const jsonFiles = await glob(["dist/*/demo/index.json", "components/**/index.json"], {cwd: root});

jsonFiles.forEach((file) => {
  const f = path.resolve(root, file);
  const json = fs.readFileSync(f, "utf-8");
  const data = JSON.parse(json);
  const { usingComponents } = data;

  for (const usingComponentsKey in usingComponents) {
    if (usingComponentsKey.startsWith('van-')) {
      usingComponents[usingComponentsKey] = '@vant/weapp/lib/' + usingComponentsKey.substring(4) + '/index'
    }
  }

  data.usingComponents = usingComponents;

  fs.writeFileSync(f, JSON.stringify(data, null, 2), "utf-8");
});
