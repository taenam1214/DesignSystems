// https://www.codeconcisely.com/posts/nextjs-storing-images-next-to-markdown/
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import fsExtra from 'fs-extra';
import { getFilesRecursively } from './find-files-recusively.mjs';

dotenv.config({ path: path.join(process.cwd(), '.env') });

const allowedImageFileExtensions = /^((?!\.md).)*$/; // not markdown
const targetDir = process.env.MD_ASSET_DIR || path.normalize(path.resolve(process.cwd(), 'public', 'md_assets'));
const postsDir = process.env.COMMON_MD_DIR || path.normalize(path.resolve(process.cwd(), 'common_md'));

function createPostImageFoldersForCopy() {
  const imgSlugs = getFilesRecursively(postsDir, allowedImageFileExtensions);
  for (const relSlug of imgSlugs) {
    const currSlug = path.normalize(path.resolve(postsDir, relSlug));
    const targetSlug = path.normalize(path.resolve(targetDir, relSlug));
    const slugDir = path.dirname(targetSlug);
    if (!fs.existsSync(slugDir)) {
      fs.mkdirSync(slugDir, { recursive: true });
    }
    fs.copyFileSync(currSlug, targetSlug);
  }
}

// 대상 디렉토리 처리
try {
  // 기존 디렉토리 삭제
  if (fs.existsSync(targetDir)) {
    fs.rmSync(targetDir, { recursive: true, force: true });
  }
  
  // 새 디렉토리 생성
  fs.mkdirSync(targetDir, { recursive: true });
  
  // 파일 복사 실행
  createPostImageFoldersForCopy();
} catch (error) {
  console.error('Error occurred:', error);
  process.exit(1);
}