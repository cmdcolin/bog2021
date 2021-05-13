import React from 'react'
import './style.css'
import icon from './icon.ico'
import ModalImage from 'react-modal-image'
import { AppBar, Toolbar, Typography, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  icon: {
    width: 48,
    height: 48,
    margin: 5,
  },
  title: {
    textAlign: 'center',
    flexGrow: 1,
  },
  post: {
    margin: 10,
    padding: 10,
    border: '1px solid black',
  },
  screenshots: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  demoLink: {
    fontSize: '200%',
    display: 'block',
    [theme.breakpoints.down('md')]: {
      fontSize: '100%',
    },
  },
  anchorLink: {
    color: '#444',
    fontSize: '200%',
    [theme.breakpoints.down('md')]: {
      fontSize: '100%',
    },
  },
  toolbar: {
    background: '#0d233f',
  },
}))

function Header() {
  const classes = useStyles()
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.title} variant="h6">
          <img alt="logo" src={icon} className={classes.icon} />
          JBrowse 2 BOG 2021
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
function App() {
  const classes = useStyles()
  return (
    <>
      <Header />
      <Readme />

      <div id="parentDiv">
        <div className={classes.post}>
          <a className={classes.anchorLink} href="#1" name="1">
            Fig 1 - Visualization of insertion and read vs ref showing read
            bases in the insertion
          </a>
          <div className={classes.screenshots}>
            <div style={{ padding: 20 }}>
              <ModalImage
                small="resized.bog1.png"
                large="bog1.png"
                alt="deletion SV"
              />
            </div>
            <div style={{ padding: 20 }}>
              <ModalImage
                small="resized.bog2.png"
                large="bog2.png"
                alt="deletion SV"
              />
            </div>
          </div>
          <p>
            JBrowse 2 can display a special indicator that helps show when long
            reads span a large insertion, and can also display soft clipped
            bases. The coverage track also shows an upside-down histogram with
            statistics on insertion and clipping to help show previously unseen
            patterns of structural variation. The right panel also shows a
            &quot;read vs reference&quot; comparisons, which in the case of an
            insertion, can help show the bases inside the insertion.
          </p>

          <a
            className={classes.demoLink}
            href="http://s3.amazonaws.com/jbrowse.org/code/jb2/v1.2.0/index.html?config=test_data%2Fconfig_demo.json&session=share-2fbtWOGiaP&password=avlDE"
          >
            Demo insertion visualization from alignments track and read vs
            reference on pacbio read
          </a>
        </div>

        <div className={classes.post}>
          <a className={classes.anchorLink} href="#2" name="2">
            Fig 2 - Sorting and coloring by the HP tag to show haplotypes
          </a>
          <ModalImage small="resized.bog3.png" large="bog3.png" />
          <p>
            This shows both coloring and sorting by BAM tag to display
            haplotype. Note that users can also filter by color by insert size,
            per-base quality, mapping score, insert size, or other metrics.
            Users can also sort by various attributes, such as arbitrary
            BAM/CRAM tag, read strand, read group, or by &quot;base pair&quot;
            which can similarly stratify by haplotype in many cases. Filtering
            by BAM/CRAM tags, read group, or read flags is another option, and
            by creating a copy of a track and filtering by HP=1 in one track and
            HP=2 in another, we can create totally separate haplotype track
            views.
          </p>
          <a
            className={classes.demoLink}
            href="http://s3.amazonaws.com/jbrowse.org/code/jb2/v1.2.0/index.html?config=test_data%2Fconfig_demo.json&session=share-V_TkzbpFgJ&password=ess9L"
          >
            Demo
          </a>
        </div>
        <div className={classes.post}>
          <a className={classes.anchorLink} href="#3" name="3">
            Fig 3 - Breakpoint split view and read versus reference
            visualization
          </a>
          <div style={{ padding: 20 }}>
            <ModalImage small="resized.bog4.png" large="bog4.png" />
          </div>
          <div style={{ padding: 20 }}>
            <ModalImage small="resized.bog5.png" large="bog5.png" />
          </div>
          <p>
            This example shows two methods of investigating a translocation. One
            uses our breakpoint split view, which shows connections between
            split read alignments or paired-end read alignments across a
            translocation or other SV event. The second shows a long-read versus
            reference visualization. An additional window size is added onto the
            sides of the visualization, which shows that all the parts of the
            split alignment align to paralogs of the WASH6P/WASH7P/WASH8P genes.
          </p>
          <a
            className={classes.demoLink}
            href="https://s3.amazonaws.com/jbrowse.org/code/jb2/bog2021/index.html?config=test_data%2Fconfig_demo.json&session=share-7Qb9MTJ89w&password=7mm9d"
          >
            Demo (breakpoint split view translocation example)
          </a>
          <a
            className={classes.demoLink}
            href="https://s3.amazonaws.com/jbrowse.org/code/jb2/v1.2.0/index.html?config=test_data%2Fconfig_demo.json&session=share-OM-3zwdCKq&password=BVUtt"
          >
            Demo (read versus reference with split alignment across multiple
            chromosomes, with a window size expanded around each segment of the
            aligned portion so you can see the genomic context which let&apos;s
            you see in this case the alignment may be involved in a false
            positive as it matches many paralogs of WASH6/7/8P genes)
          </a>
        </div>

        <div className={classes.post}>
          <a className={classes.anchorLink} href="#4" name="4">
            Fig 4 - Dynamically loading plugins for GWAS
          </a>
          <div className={classes.screenshots}>
            <ModalImage small="resized.bog6.png" large="bog6.png" />
          </div>
          <p>
            The GWAS plugin for JBrowse 2 helps demonstrate the ability to do
            whole-genome views of all chromosomes at once. It downloads a BED
            tabix file containing all the variants and their -log(p)
            probabilities, data from https://my.locuszoom.org/gwas/236887/. The
            link will take a little while to render the whole dataset, however
            once it is loaded, users can zoom in and see features under the
            peaks.
          </p>
          <p>
            Also of technical note, the plugin is loaded dynamically, and
            jbrowse does not need to be rebuilt to load the plugin resources.
            The plugins use a special build system so that they can load the
            same dependencies that jbrowse 2 core is using at runtime. See{' '}
            <Link href="https://github.com/GMOD/jbrowse-plugin-template">
              here
            </Link>{' '}
            for details on getting setup with developing plugins
          </p>
          <a
            className={classes.demoLink}
            href="https://s3.amazonaws.com/jbrowse.org/code/jb2/v1.2.0/index.html?config=https%3A%2F%2Funpkg.com%2Fjbrowse-plugin-gwas%40%5E1%2Fdist%2Fconfig.json&session=share-QSmlGm8Eq1&password=B0XFj"
          >
            Demo (Manhattan plot)
          </a>
        </div>
        <div className={classes.post}>
          <a className={classes.anchorLink} href="#5" name="5">
            Fig 5 - Dynamically loading plugins for MSAView
          </a>
          <div className={classes.screenshots}>
            <ModalImage small="resized.bog7.png" large="bog6.png" />
          </div>
          <p>
            The MSAView plugin is a custom project launched to visualize large
            multiple-sequence alignment datasets, and leverage the JBrowse 2
            ecosystem. Even though it seems tangential to a genome browser, it
            helps with the JBrowse 2 mission of comparative genomics. The
            MSAView can visualize a combined tree and MSA, or just one or the
            other. It uses virtualized tiles scrolling so that large datasets
            with thousands of sequences don&apos;t overwhelm the system. It can
            render data from Stockholm, Clustal, and FASTA format in addition to
            newick format trees
          </p>
          <p>
            Same as with the GWAS plugin above, the MSAView also uses the
            special build system
          </p>

          <a
            className={classes.demoLink}
            href="https://s3.amazonaws.com/jbrowse.org/code/jb2/v1.2.0/index.html?config=https%3A%2F%2Funpkg.com%2Fjbrowse-plugin-msaview%2Fdist%2Fconfig.json&session=share-LFP1eZU1HU&password=IyKqd"
          >
            Demo (MSAView plugin)
          </a>
        </div>
      </div>
    </>
  )
}

function Readme() {
  return (
    <div className="readme">
      <p>
        <i>
          This is a companion website for Biology of Genomes 2021 try to show
          the extensibility of the JBrowse 2 platform, as well as show the
          advanced capabilities that are built in for alignments and structural
          variant visualization.
        </i>
      </p>
      <div>
        <a href="https://github.com/GMOD/jbrowse-components">Github</a>
        <br />
        <a href="https://gitter.im/GMOD/jbrowse2">Gitter chat</a>
        <br />
        <a href="https://jbrowse.org">Main website @ jbrowse.org</a>
        <br />
        <br />
        <p>
          <i>
            Note: We now have a JBrowse 2{' '}
            <a href="https://jbrowse.org/jb2/docs/">documentation portal</a>,
            and JBrowse 2 releases are being posted to our{' '}
            <a href="https://jbrowse.org/jb2/blog">blog</a>
          </i>
        </p>
        <p>
          <i>
            Also note: you can click on any figure here for a zoomed in version
          </i>
        </p>
      </div>
    </div>
  )
}
export default App
