<?php

namespace App\Controller;

use App\Entity\Pages;
use App\Entity\Users;
use App\Repository\PagesRepository;
use Symfony\Bridge\Doctrine\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


class PagesController extends AbstractController
{
    //  ~Page liste kollectors~
    #[Route('/kollectors/list', name: 'app_kollectors_list')]
    public function kollectorsList(PagesRepository $pagesRepository): Response
    {
        return $this->render('pages/index_kollectors.html.twig', [
            'pages' => $pagesRepository->findAll()
        ]);
          //~ => logout or connexion visitor => list all kollectors = OK~
    }

     //  ~Page one kollector~
     #[Route('kollector/view/{id}', name: 'app_kollector_view', methods: ['GET'])]
     public function kollectorView(Pages $page): Response
     {
         return $this->render('pages/view_kollector.html.twig', [
             'page' => $page,
         ]);
         //~ => logout or connexion visitor => page one kollector = OK~~
     }
    
}
