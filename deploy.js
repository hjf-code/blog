// 使用gulp-sftp-up5将 outputDir 中的文件上传到远端，更多参数参考文档：https://www.npmjs.com/package/gulp-sftp-up5?activeTab=readme
// 如果报错：Cannot parse privateKey: Unsupported key format，则删除.ssh下的秘钥，重新执行如下命令生成秘钥：ssh-keygen -m PEM -t rsa

import gulp from 'gulp';
import sftp from 'gulp-sftp-up5-hjf';

gulp.src('./src/.vuepress/dist/**').pipe(
	sftp({
		// 部署到服务器的路径
		remotePath: '/home/docker/nginx/html',
		// 对应着.env.sftp的key
		SFTP: 'prod',
		// 该属性可删除 remotePath 下的所有文件/文件夹(注意：这里要是设置了自动删除，千万不要写错remotePath，不然文件删了找不回来了)
		removeCurrentFolderFiles: true,
		// 这里出现问题，每次自动上传后，需要重启docker的nginx才行，不然报403，所以使用了customCommand参数
		// 但是gulp-sftp-up5这个的原作者有行代码写错了，所以我fork了他的代码，修改后重新发布了一个版本
		customCommand: 'docker restart nginx',
	})
);
