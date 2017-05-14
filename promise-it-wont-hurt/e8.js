const attachTitle = x => `DR. ${x}`;
Promise.resolve('MANHATTAN').then(attachTitle).then(console.log);
