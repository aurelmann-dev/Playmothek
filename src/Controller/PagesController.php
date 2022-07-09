<?php

namespace App\Controller;

use DateTime;
use App\Entity\Pages;
use App\Entity\Users;
use App\Entity\Images;
use App\Entity\Comments;
use App\Form\CommentsType;
use App\Repository\ImagesRepository;
use App\Repository\PagesRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;
use Knp\Component\Pager\PaginatorInterface;
use Doctrine\ORM\Tools\Pagination\Paginator;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use ContainerVrWYNEy\PaginatorInterface_82dac15;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


class PagesController extends AbstractController
{
    //  ~Page liste kollectors~
    #[Route('/kollectors/list', name: 'app_kollectors_list')]
    public function kollectorsList(PagesRepository $pagesRepository): Response
    {
        return $this->render('pages/index_kollectors.html.twig', [
            'pages' => $pagesRepository->findAll(),
        ]);
        //~ => logout or connexion visitor => list all kollectors = OK~
    }

    //  ~Page one kollector~
    #[Route('kollector/view/{id}', name: 'app_kollector_view', methods: ['GET', 'POST'])]
    public function kollectorView(Pages $page, Request $request, ManagerRegistry $doctrine, PaginatorInterface $paginator): Response
    {
        $em = $doctrine->getManager();
        $imgPage = $em->getRepository(Images::class)->findBy([]);
        $imgPage = $paginator->paginate(
            $imgPage,
            $request->query->getInt('page', 1),
            6
        );

        // ~Comments~
        $comment = new Comments;;

        $commentForm = $this->createForm(CommentsType::class, $comment);
        $commentForm->handleRequest($request);

        if ($commentForm->isSubmitted() && $commentForm->isValid()) {
            // dd($comment);
            $comment->setCreatedAt(new DateTime());
            $comment->setPages($page);

            // ~Response comment~
            $parent_id = $commentForm->get('parent_id')->getData();

            // $em = $doctrine->getManager();

            if ($parent_id != null) {
                // ~corresponding comment~
                $parent = $em->getRepository(Comments::class)->find($parent_id);
            }

            //  ~this parent~
            $comment->setParent($parent ?? null);

            $em->persist($comment);
            $em->flush();

            $this->addFlash('message', 'Commentaire envoyé');
            return $this->redirectToRoute('app_kollector_view', ['id' => $page->getId()]);
        }

        return $this->render('pages/view_kollector.html.twig', [
            'page' => $page,
            'commentForm' => $commentForm->createView()
        ]);
        //~ => logout or connexion visitor => page one kollector = OK~~
    }

    #[Route('kollector/diaporama/{id}', name: 'app_kollector_diaporama', methods: ['GET', 'POST'])]
    public function kollectorDiapo(Pages $page, Request $request, PaginatorInterface $paginator, ImagesRepository $imagesRepository): Response
    {

        $imgPage = $imagesRepository->findAll();

        // dd($imgPage);

        $images = $paginator->paginate(
            $imgPage,
            $request->query->getInt('page', 1),1
        );
// dd($images);
// dd($imgPage);
        return $this->render('users/profil/diaporama.html.twig', [
            'page' => $page,
            'images' => $images,
        ]);
    }
}
