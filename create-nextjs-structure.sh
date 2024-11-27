#!/bin/bash

# 创建主要目录结构
mkdir -p app/\(auth\)/login
mkdir -p app/\(auth\)/register
mkdir -p app/\(community\)/posts/\[id\]
mkdir -p app/\(community\)/posts/create
mkdir -p app/jobs/\[id\]
mkdir -p app/jobs/post
mkdir -p app/groups/\[id\]
mkdir -p app/cities/\[cityName\]
mkdir -p app/training/\[courseId\]
mkdir -p app/user/\[id\]/posts
mkdir -p app/user/\[id\]/jobs
mkdir -p app/user/settings
mkdir -p app/api/{auth,posts,jobs,users}
mkdir -p app/components/{layout,community,jobs,shared}

// ... 其余文件创建命令保持不变 ...
