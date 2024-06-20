import {Link} from '../Link/index';
import type { Metadata } from 'next';
import { Logo } from '../Logo/index';
import styles from './styles.module.scss';
import { fetchPosts, Post } from './api';

async function fetchTermsConditions(): Promise<string> {
    const response = await fetch('https://www.abelandcole.co.uk/terms-conditions.htm');
  
    if (!response.ok) {
      throw new Error(`An error occurred: ${response.statusText}`);
    }
  
    const html = await response.text();
    return html;
  }

  function createMarkup(html: string): { __html: string } {
    return { __html: html };
  }
  
  export default async function Page() {
    let htmlContent: string = '';
    let error: string | null = null;
  
    try {
      htmlContent = await fetchTermsConditions();
    } catch (err: any) {
      error = err.message;
    }
  
    return (
      <div className={styles.test}>
        <Link className={styles.logo} href="/" title="Homepage">
          <Logo />
        </Link>
        <div dangerouslySetInnerHTML={createMarkup(htmlContent)} />
      </div>
    );
  }