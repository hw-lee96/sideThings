module.exports = {
  apps : [
    {
      name: "demoDB",
      args: [
        "-jar",
        "demo_db-0.0.2.jar"
      ],
      env: {
      },
      script: "/usr/bin/java",
      node_args: [],
      log_date_format: "YYYY-MM-DD HH:mm Z",
      exec_interpreter: "none",
      exec_mode: "fork"
    },
    {
      name: 'demoBack',
      cwd: './demo/demo_back_node',
      script: 'server.js',
      watch: [
          'server.js',
      ]
    }
  ],
}
