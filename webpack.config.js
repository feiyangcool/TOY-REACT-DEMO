module.exports={
    entry: {
        main: './main.js',
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            use:[
                {
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env'],
                        plugins:[[
                            "@babel/plugin-transform-react-jsx",
                            {pragma:"ToyReact.creatElement"}
                        ]]
                    }
                }
            ]
          }
        ]
      },
      mode:"development",
      optimization:{
          minimize:false
      }
}